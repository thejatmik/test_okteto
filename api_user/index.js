const express = require('express');
const app = express();
const PORT = 6968;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/test', (req, res) => {
  res.status(200).json({
    name: 'api_user',
    time: new Date(),
  });
});

app.listen(PORT, () => {
  console.log(`on port ${PORT}`);
});
