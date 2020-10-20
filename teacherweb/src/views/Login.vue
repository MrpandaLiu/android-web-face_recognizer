<!--
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-17 17:39:56
 * @FilePath: \DIPproject\teacherweb\src\views\Login.vue
 * @Description: add some description
-->
<template>
  <div class="login">
    <div class="login-form">
      <h1>321签到后台管理</h1>
      <el-form ref="form" label-width="80px">
        <el-form-item label="工号">
          <el-input v-model="teacherId"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-form-item align="center">
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/teacher";
export default {
  name: "Login",
  data() {
    return {
      teacherId: undefined,
      password: "",
    };
  },
  methods: {
    onSubmit() {
      login({
        teacherId: Number(this.teacherId),
        password: this.password,
      }).then((res) => {
        const { code, data } = res.data;
        console.log(data);
        if (code === -1) {
          this.$message.error(data);
        } else {
          this.$message.success("登录成功");
          localStorage.setItem("name", data.teacherName);
          this.$router.push("/home");
        }
      });
    },
  },
};
</script>

<style lang="scss">
.login-form {
  width: 400px;
  margin: 100px auto;

  h1 {
    text-align: center;
    color: #054280;
    padding-left: 40px;
    margin-bottom: 40px;
  }
}
</style>