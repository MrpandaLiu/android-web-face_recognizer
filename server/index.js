/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-13 19:25:30
 * @FilePath: \DIPproject\server\index.js
 * @Description: add some description
 */
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const app = express();
const port = 3000;
const { trainingData } = require('./controller');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(require('cors')());

app.use(router);

app.listen(port, () => {
  // 开启服务器
  console.log(`app listening on port ${port}!`);
  trainingData();
})