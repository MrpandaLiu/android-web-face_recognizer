/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-20 10:08:06
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

// 获取列表
export function getList(data) {
  return request({
    url: "/getlist",
    method: "post",
    data: data
  })
}