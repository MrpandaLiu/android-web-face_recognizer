/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-11-07 14:36:07
 * @FilePath: \stdSignupd:\cs\数字图像处理\DIPproject\webapp\reception\src\utils\index.js
 * @Description: add some description
 */
export const compressImg = async (img, type, mx, mh) => {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const { width: originWidth, height: originHeight } = img;
    // 最大尺寸限制
    const maxWidth = mx;
    const maxHeight = mh;
    // 目标尺寸
    let targetWidth = originWidth;
    let targetHeight = originHeight;
    if (originWidth > maxWidth || originHeight > maxHeight) {
      if (originWidth / originHeight > 1) {
        // 宽图片
        targetWidth = maxWidth;
        targetHeight = Math.round(
          maxWidth * (originHeight / originWidth)
        );
      } else {
        // 高图片
        targetHeight = maxHeight;
        targetWidth = Math.round(
          maxHeight * (originWidth / originHeight)
        );
      }
    }
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    context.clearRect(0, 0, targetWidth, targetHeight);
    // 图片绘制
    context.drawImage(img, 0, 0, targetWidth, targetHeight);
    //this.imgSrc = canvas.toDataURL("image/png");
    canvas.toBlob(function (blob) {
      resolve(blob);
    }, type || "image/png");
  });
};

// 读取图片方法
export const readImg = (file) => {
  return new Promise((res) => {
    const img = new Image();
    const reader = new FileReader(); // 读取文件资源
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      img.src = e.target.result;
      res(img);
    };
  });
};