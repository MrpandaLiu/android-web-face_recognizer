/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-13 20:41:36
 * @FilePath: \DIPproject\teacherweb\src\api\request.js
 * @Description: add some description
 */
import axios from "axios";

export function request(config) {
  const instance = axios.create({
    //baseURL: "http://192.168.43.77:3000",
    baseURL: "http://localhost:3000",
    timeout: 100000
  })

  return instance(config);
}