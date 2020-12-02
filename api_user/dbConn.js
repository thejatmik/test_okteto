const dotenv = require('dotenv');
if (dotenv) dotenv.config();
const {Pool} = require('pg');
const {MongoClient} = require('mongodb');

const mongoUser = process.env.MONGODB_USERNAME;
const mongoPass = process.env.MONGODB_PASSWORD;
const mongoHost = process.env.MONGODB_HOST;
const mongoPort = process.env.MONGODB_PORT;
const mongoDatabase = process.env.MONGODB_DATABASE;

const mongoUrl = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}`;
const mongo_ = `mongodb://${mongoHost}:${mongoPort}`;

const pool = new Pool({
  user: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

let mongo;
module.exports = {
  pool,
  connectMongo: function () {
    return MongoClient.connect(mongo_, {useNewUrlParser: true, useUnifiedTopology: true})
      .then(async (client) => {
        mongo = client;
        mongo = await client.db(mongoDatabase);
      });
  },
  mongo: async function () {
    return mongo;
  },
};
