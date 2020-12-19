/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-01 16:23:19
 * @FilePath: \reception-app\src\api\user.js
 * @Description: add some description
 */
import {
  request
} from "./request";

// 签到
export function getReception(data) {
  return request({
    url: "/reception",
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data: data
  });
}