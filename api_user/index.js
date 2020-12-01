const express = require('express');
const {pool} = require('./dbConn.js');
const app = express();
const PORT = 6968;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/test', async (req, res) => {
  let dbResp;
  try {
    dbResp = await pool.query('SELECT NOW()');
    res.status(200).json({
      name: 'api_user',
      time: new Date(),
      dbResp,
    });
  } catch (error) {
    res.status(500).json({
      name: 'api_user',
      time: new Date(),
      error,
    });
  }
});
app.get('/env', (req, res) => {
  res.status(200).json({
    name: 'api_user',
    env: process.env,
  });
});
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'api_user',
  });
});

app.listen(PORT, () => {
  console.log(`on port ${PORT}`);
});
