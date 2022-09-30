<template>
  <div class="header">
    <h1>VUE、Element UI权限系统开发实战</h1>
    <div class="user">
      <el-dropdown :hide-on-click="false">
        <span class="el-dropdown-link">
          <div class="useImg">
            <img src="../../img/1.png" alt="" class="img" />
          </div>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>还原数据</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <div class="userinfo">
        <p class="name">欢迎您，王俊凯</p>
        <p class="time">2022.9.30 10:09:30 星期五</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    }
};
</script>
<style lang="scss" scoped>
.header {
  height: 60px;
  background-color: rgb(22, 123, 216);
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    float: left;
    font-size: 20px;
  }
  .img {
    width: 50px;
    height: 50px;
    margin-top: 4px;
    border-radius: 50%;
  }
  .user {
    display: flex;
    color: #fff;
    .userinfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 10px;
      .time {
        font-weight: 600;
      }
      .name {
        margin-bottom: 6px;
      }
    }
  }
}
</style>
