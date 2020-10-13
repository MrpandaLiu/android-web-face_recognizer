/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-13 19:33:59
 * @FilePath: \DIPproject\server\router.js
 * @Description: add some description
 */
const express = require("express");
const router = express.Router();
const { handleReception, handleLogin } = require("./controller");

router.post('/reception', handleReception);

router.post('/login', handleLogin);


module.exports = router;