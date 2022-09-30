<template>
 <el-container>
  <el-header>
    <app-header></app-header>
  </el-header>
  <el-container>
    <el-aside width="200px">
        <app-aside></app-aside>
    </el-aside>
    <el-main>
        <app-main></app-main>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import AppHeader from "../layout/AppHeader"
import AppAside from "../layout/AppAside"
import AppMain from "../layout/AppMain"
export default {
    data () {
        return {
            
        }
    },
    components: {
        AppHeader,
        AppAside,
        AppMain
    }
}
</script>
<style lang="scss" scoped>
.el-header{
    background-color: #167bd8;
    height: 60px;
    color: #fff;
  }
  
  .el-aside {
    background-color: #fff;
    color: #333;
    height: 100vh;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>

