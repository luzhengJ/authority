<template>
  <div class="login">
    <el-form :model="loginFrom" :rules="rules" ref="ruleForm">
      <el-form-item>
        <h2>系统登录</h2>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          v-model="loginFrom.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginFrom.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code" class="test">
        <el-input
          class="code"
          v-model="loginFrom.code"
          placeholder="请输入验证码"
        ></el-input>
        <img :src="imgCodeUrl" alt="" @click="code()" />
        <!-- <img class="img" :src="imgCodeUrl" alt="" @click="code()"> -->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="el-button" @click="handleLogin"
          >登录</el-button
        >
        <el-button @click="resetForm('ruleForm')" class="el-button"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import loginApi from "../../api/user";
export default {
  data() {
    return {
      imgCodeUrl: "",//验证码图片
      loginList: [],//存放后台获取的数据
      loginFrom: {
        username: "",//用户名
        password: "",//密码
        code: "",//验证码
      },//登录表单
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },//登录表单校验
    };
  },
  methods: {
    /**
     * 登录表单校验
     */
    handleLogin() {
      this.$refs["ruleForm"].validate((valid) => {
        if (!valid) return;
        this.Login();
      });
    },
    /**
     * 登录功能
     */
    async Login() {
      const response = await loginApi.login(
        `username=${this.loginFrom.username}&password=${this.loginFrom.password}&code=${this.loginFrom.code}`
      );
      console.log(response);
      if (response.data.token) {
        this.$router.push("/about");
        this.$message.success("登录成功");
      }
    },
    /**
     * 验证码
     */
    async code() {
      try {
        const response = await loginApi.code();
        this.imgCodeUrl = window.URL.createObjectURL(response.data);
      } catch (error) {
        console.log(error.message);
      }
    },
    /**
     * 重置功能
     */
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  created() {
    this.code();
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 340px;
  height: 300px;
  line-height: 300px;
  margin: 150px auto;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 25px #cac6c6;
  padding: 20px 25px;
  h2 {
    font-weight: 1000;
    font-size: 28px;
  }
  //   .test {
  //     width: 246px;
  //   }
  .el-button {
    width: 160px;
  }
  .code {
    float: left;
    width: 64%;
  }
  .img {
    float: right;
  }
}
</style>
