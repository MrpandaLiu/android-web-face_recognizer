/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-13 20:56:22
 * @FilePath: \DIPproject\server\db\teacher.js
 * @Description: add some description
 */
const config = require('./config');
const mysql = require('mysql');
const connection = mysql.createConnection(config);

const checkTeacher = (req, res, condition) => {
  const { teacherId, password } = condition;
  const sql = `select * from teacher where teacherId=${teacherId} and password='${password}'`;
  connection.query(sql,(err,data) => {
    if(data.length === 0) {
      res.send({
        code: -1,
        data: "登录失败"
      });
    }
    else {
      res.send({
        code: 0,
        data: data[0]
      });
    }
  })
}


module.exports = {
  checkTeacher
}