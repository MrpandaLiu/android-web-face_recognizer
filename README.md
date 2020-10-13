<!--
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-13 21:08:44
 * @FilePath: \undefinedd:\cs\数字图像处理\DIPproject\README.md
 * @Description: add some description
-->
1. 服务器端（node.js）开启后就开始训练
2. python脚本通过opencv提供的实例进行训练并生成模型
3. 客户端（uni-app）进行拍照，然后发送formdata请求
4. 服务器收到请求后，调用预测的python脚本并监听输出，返回给客户端
5. 预测的脚本读取模型和待预测图片并输出结果