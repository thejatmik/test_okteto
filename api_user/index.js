const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/test', (req, res) => {
  res.status(200).json({
    name: 'api_user',
    time: new Date(),
  });
});

app.listen(6969, () => {
  console.log('on port 6969');
});
