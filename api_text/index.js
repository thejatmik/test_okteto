const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/test', (req, res) => {
  res.status(200).json({
    name: 'api_text',
    time: new Date(),
  });
});
app.get('/env', (req, res) => {
  res.status(200).json({
    name: 'api_text',
    env: process.env,
  });
});
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'api_text',
  });
});

app.listen(6969, () => {
  console.log('on port 6969');
});
