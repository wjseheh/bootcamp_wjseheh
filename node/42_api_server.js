// uuid-apikey
const uuidAPIKey = require("uuid-apikey");
// console.log(uuidAPIKey.create());

// {
//   apiKey: 'JC6WFE5-3794Z9K-M2MPSP3-EH8CC9H',
//   uuid: '930dc7b8-19d2-4fa6-a0a9-6cd87450c626'
// }

const accessKey = {
  apiKey: "JC6WFE5-3794Z9K-M2MPSP3-EH8CC9H",
  uuid: "930dc7b8-19d2-4fa6-a0a9-6cd87450c626",
};

const express = require("express");
const app = express();
require("dotenv").config({ path: "mysql/.env" });
const mysql = require("./mysql");

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작 되었습니다.");
});

app.get("/api/:apikey/categories", async (req, res) => {
  const apikey = req.params.apikey;
  if (apikey === accessKey.apiKey) {
    if (uuidAPIKey.toUUID(apikey) === accessKey.uuid) {
      const categoryList = await mysql.query("categoryList");
      res.send(categoryList);
    } else {
      res.send("apikey가 정상적이지 않습니다.");
    }
  } else {
    res.send("apikey가 존재하지 않습니다.");
  }
});
