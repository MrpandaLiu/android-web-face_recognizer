/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-13 20:34:35
 * @FilePath: \DIPproject\teacherweb\src\api\teacher.js
 * @Description: add some description
 */
import {
  request
} from "./request";

// 签到
export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data: data
  });
}