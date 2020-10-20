/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-20 10:46:23
 * @FilePath: \DIPproject\server\db\teacher.js
 * @Description: add some description
 */
const config = require('./config');
const mysql = require('mysql');
const { getTime } = require('../utils');
const connection = mysql.createConnection(config);

const checkTeacher = (condition, callback) => {
  const { teacherId, password } = condition;
  const sql = `select * from teacher where teacherId=${teacherId} and password='${password}'`;
  connection.query(sql, callback);
};

const addReception = (condition, callback) => {
  const name = condition;
  const date = new Date();
  const year = date.getFullYear(),
  month = date.getMonth()+1 > 9 ? date.getMonth()+1 : `0${date.getMonth()+1}`,
  day = date.getDay() > 9 ? date.getDay() : `0${date.getDay()}`;
  const time = getTime();
  const sql = `INSERT INTO receptioninfo('studentName', 'year', 'month', 'day', 'time') VALUES ('${name}', '${year}', '${month}', '${day}', '${time}')`;
  connection.query(sql, callback);
};

const getDB = (condition, callback) => {
  const { year, month, day } = condition;
  const sql = `select * from receptioninfo where year='${year}' and month='${month}' and day='${day}'`;
  connection.query(sql, callback);
};


module.exports = {
  checkTeacher,
  addReception,
  getDB
}