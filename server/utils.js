/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-13 18:52:38
 * @FilePath: \数字图像处理\server\utils.js
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

module.exports = {
  savePic
}