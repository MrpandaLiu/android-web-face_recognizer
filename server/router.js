/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-17 17:22:04
 * @FilePath: \DIPproject\server\router.js
 * @Description: add some description
 */
const express = require("express");
const router = express.Router();
const { handleReception, handleLogin, getList } = require("./controller");

router.post('/reception', handleReception);

router.post('/login', handleLogin);

router.post('/getlist', getList);


module.exports = router;