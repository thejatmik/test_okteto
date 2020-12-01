const {Pool} = require('pg');
const {MongoClient} = require('mongodb');

const mongoUser = process.env.MONGODB_USERNAME;
const mongoPass = process.env.MONGODB_PASSWORD;
const mongoHost = process.env.MONGODB_HOST;
const mongoPort = process.env.MONGODB_PORT;
const mongoDatabase = process.env.MONGODB_DATABASE;

const mongoUrl = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}`;

const pool = new Pool({
  user: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

let mongo;
MongoClient.connect(mongoUrl)
  .then((client) => {
    mongo = client.db(mongoDatabase);
  })
  .catch((err) => {
    console.log('error mongoclient');
    console.log(err);
  });

module.exports = {
  pool,
  mongo,
};
