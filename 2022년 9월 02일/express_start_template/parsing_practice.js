const express = require("express");

const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.json());

const { logger } = require("./utils/winston");

app.use(express.static(__dirname + "/views"));

const fs = require("fs");

const insert = (str, index, target) => {
  const front = str.slice(0, index);
  const back = str.slice(index, str.length);
  return front + target + back;
  };
  let retData = {};

  app.get("/api/logs", (req, res) => {
    return res.json(retData);
  })

  app.post("/api/logs", (req, res) => {
  logger.error("error 메시지");
  logger.warn("warn 메시지");
  logger.info("info 메시지");
  logger.http("http 메시지");
  logger.debug("debug 메시지");
  fs.readFile("./logs/2022-09-02-13.log", "utf8", (err, data) => {
  retData = data;
  let idx = -1;
  while (1) {
  idx = retData.indexOf("}", idx + 1);
  if (idx === -1) {
  break;
  }
  retData = insert(retData, idx + 1, ",");
  }
  retData = "[" + retData.slice(0, retData.length - 3) + "]";
  retData = JSON.parse(retData);
  console.log(retData);
  });
  return res.json({
  success: true,
  });
  });
  




app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
