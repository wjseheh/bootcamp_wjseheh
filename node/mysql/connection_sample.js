var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "dev3",
  password: "1303",
  database: "dev1",
});

connection.connect();

connection.query("SELECT * FROM PRODUCT", function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();
