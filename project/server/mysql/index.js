const mysql = require("mysql");
const sql = require("./sql");
const logger = require("../winston/logger"); // logger.js 가져오기

const pool = mysql.createPool({
  // host: "localhost",
  // port: 3306,
  // user: "dev1",
  // password: "1234",
  // database: "dev1",
  // connectionLimit: 10,

  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  connectionLimit: process.env.MYSQL_LIMIT,
});

const query = (alias, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql[alias], values, (error, results) => {
      if (error) {
        logger.error(error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  query,
};
