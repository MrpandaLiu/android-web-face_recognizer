<!--
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-12 16:18:47
 * @FilePath: \数字图像处理\webapp\reception\src\views\Mobilepic.vue
 * @Description: add some description
-->
<template>
  <div class="mobilepic">
    <input
      type="file"
      accept="image/*"
      id="takepicture"
      @change="changepic($event)"
    />
    <button @click="take">拍照</button>
    <img class="show-img" :src="imgSrc" alt />
  </div>
</template>

<script>
import { getReception } from "../api/user";
export default {
  data() {
    return {
      imgSrc: "",
    };
  },
  methods: {
    take() {
      document.getElementById("takepicture").click();
    },
    // 提交图片
    async changepic(e) {
      // 获取到图片
      let file = e.target.files[0];

      // 压缩图片方法
      const compressImg = async (img, type, mx, mh) => {
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
          this.imgSrc = canvas.toDataURL("image/png");
          console.log(this.imgSrc);
          canvas.toBlob(function (blob) {
            resolve(blob);
          }, type || "image/png");
        });
      };

      // 读取图片方法
      const readImg = (file) => {
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

      const img = await readImg(file);
      const blob = await compressImg(img, file.type, 600, 600);
      // 创建formdata
      const form = new FormData();
      form.append("pic", blob);
      // 发送请求
      getReception(form).then((res) => {
        alert(res.data.data);
      });
    },
  },
};
</script>

<style>
</style>