<template>
  <div class="aside">
    <el-menu
      default-active="2"
      background-color="#fff"
      text-color="#303133"
      active-text-color="#409eff"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span class="menu-title">系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"> <i class="el-icon-document"></i> 机构管理</el-menu-item>
          <el-menu-item index="1-2"> <i class="el-icon-user-solid"></i>用户管理</el-menu-item>
          <el-menu-item index="1-3"> <i class="el-icon-setting"></i>角色管理</el-menu-item>
          <el-menu-item index="1-4"> <i class="el-icon-user-solid"></i>权限管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

           <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span class="menu-title">商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"> <i class="el-icon-document"></i>分类管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

           <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span class="menu-title">系统工具</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"> <i class="el-icon-document"></i>日志管理</el-menu-item>
          <el-menu-item index="1-2"> <i class="el-icon-document"></i>接口文档</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.aside{
    .menu-title{
        font-weight: 600;
        font-size: 16px;
    }
}
</style>

