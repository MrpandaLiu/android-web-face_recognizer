/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-20 10:51:30
 * @FilePath: \DIPproject\server\utils.js
 * @Description: add some description
 */
const fs = require('fs');

// 保存图片的方法
const savePic = async (path, name) => {
  return new Promise((res, rej) => {
    fs.renameSync(path, `./opencv/test-data/${name}.jpg`);
    res();
  })
}

// 获取时间
const getTime = () => {
  const D = new Date();
  const hh = D.getHours() > 9 ? `0${D.getHours()}` : D.getHours();    //获取小时数
  const min = D.getMinutes() > 9 ? `0${D.getMinutes()}` : D.getMinutes();   //获取分钟数
  const ss = D.getSeconds() > 9 ? `0${D.getSeconds()}` : D.getSeconds();    //获取秒
  const sep = ":";
  return hh+sep+min+sep+ss;
}

module.exports = {
  savePic,
  getTime
}