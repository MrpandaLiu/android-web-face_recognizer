/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-11-29 12:37:31
 * @FilePath: \undefinedd:\cs\数字图像处理\DIPproject\webapp\reception\src\api\request.js
 * @Description: add some description
 */
import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://182.92.201.214:3000",
    //baseURL: "http://localhost:3000",
    timeout: 100000
  })

  return instance(config);
}