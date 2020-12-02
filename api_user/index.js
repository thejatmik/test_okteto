const express = require('express');
const {
  pool,
  connectMongo,
  mongo: mongo_,
} = require('./dbConn.js');

const app = express();
const PORT = 6968;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/pg', async (req, res) => {
  try {
    let {rows: pgTime} = await pool.query('SELECT NOW()');
    res.status(200).json({
      name: 'api_user',
      time: new Date(),
      pgTime,
    });
  } catch (error) {
    res.status(500).json({
      name: 'api_user',
      time: new Date(),
      error,
    });
  }
});

connectMongo()
  .then(async () => {
    let mongo = await mongo_();
    app.get('/mongo', async (req, res) => {
      try {
        let mongoResp = await mongo.stats();
        res.status(200).json({
          name: 'api_user',
          time: new Date(),
          mongoResp,
        });
      } catch (error) {
        res.status(500).json({
          name: 'api_user',
          time: new Date(),
          error: error.message,
        });
      }
    });

  })
  .catch((error) => {
    console.log(error);
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
