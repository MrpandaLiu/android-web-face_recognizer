/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-17 17:31:20
 * @FilePath: \DIPproject\server\controller.js
 * @Description: add some description
 */
const formidable = require('formidable');
const spawn = require("child_process").spawn;
const { savePic } = require("./utils");
const { checkTeacher, addReception, getDB } = require('./db/teacher');

/**
 * 训练数据集
 */
const trainingData = () => {
  // 通过node.js开启子进程调用python脚本并监听
// 启动服务器后开始训练模型
const process = spawn('python', ["./opencv/face.py"]);

process.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

process.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

process.on('close', function (code) {
  console.log('子进程已退出，退出码 ' + code);
});
}

/**
 * 处理签到
 */
const handleReception = (req, res) => {
  // 解析request的formdata
  const form = new formidable.IncomingForm();
  form.uploadDir = __dirname + '/opencv/test-data';
  const t = 'test1';
  form.parse(req, async (err, fields, files) => {
    // 先将图片临时文件保存到服务器中
    savePic(files.pic.path, t).then((re) => {
      // 开启子进程进行预测
      // 将图片地址作为参数传给python脚本
      const process2 = spawn('python', ["./opencv/predict.py", `${t}.jpg`]);

      // 监听脚本的输出 当成功时返回脚本的输出结果
      process2.stdout.on('data', function (data) {
        console.log('stdout2: ' + data);
        addReception(data.toString(), (err, data) => {
          if(err) {
            console.log(err);
          }
          res.send({
            data: condition
          })
        });
      });

      process2.stderr.on('data', function (data) {
        console.log('stderr2: ' + data);
      });

      process2.on('close2', function (code) {
        console.log('子进程已退出，退出码 ' + code);
      });
    });
  })
};


/**
 * 教师登录
 */

const handleLogin = (req, res) => {
  const condition = req.body;
  checkTeacher(condition, (err,data) => {
    if(data.length === 0) {
      res.send({
        code: -1,
        data: "登录失败"
      });
    }
    else {
      res.send({
        code: 0,
        data: data[0]
      });
    }
  });
}


/**
 * 获取列表
 */

const getList = (req, res) => {
  const condition = req.body;
  getDB(condition, (err, data) => {
    if(err) {
      console.log(err);
    }
    res.send({
      data: data
    })
  });   
 }

module.exports = {
  handleReception,
  trainingData,
  handleLogin,
  getList
}