<!--
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-11-03 19:49:35
 * @FilePath: \reception\src\views\Home.vue
 * @Description: add some description
-->
<template>
  <div class="mobilepic">
    <input
      type="file"
      accept="image/*"
      id="takepicture"
      ref="camera"
      @change="changepic($event)"
    />
    <main>
      <h1>321人脸识别签到系统</h1>
      <button class="btn" @click="take"><strong>拍照</strong></button>
      <!-- <img class="show-img" :src="imgSrc" alt /> -->
    </main>
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
import { getReception } from "../api/user";
import Loading from "../components/Loading";
import { compressImg, readImg } from "../utils";
export default {
  name: "Home",
  data() {
    return {
      imgSrc: "",
      loading: false,
    };
  },
  methods: {
    take() {
      this.$refs.camera.click();
    },
    // 提交图片
    async changepic(e) {
      this.loading = true;

      // 获取到图片
      let file = e.target.files[0];

      const img = await readImg(file);
      const blob = await compressImg(img, file.type, 600, 600);
      // 创建formdata
      const form = new FormData();
      form.append("pic", blob);
      // 发送请求
      getReception(form).then((res) => {
        alert(res.data.data);
        this.loading = false;
      });
    },
  },
  components: {
    Loading,
  },
};
</script>

<style lang="scss">
.mobilepic {
  width: 100vw;
  height: 100vh;
  background: #00712f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #takepicture {
    display: none;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: white;
      margin-bottom: 100px;
    }

    .btn {
      width: 120px;
      height: 50px;
      border-radius: 10px;
      border: 1px solid white;
      letter-spacing: 0.5rem;
      color: #00712f;
      font-size: 20px;
    }
  }
}
</style>