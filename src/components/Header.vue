<template>
  <div class="header-wrapper">
    <div class="header-main">
      <h1 class="header-logo">Logo</h1>
      <el-menu class="header-nav" :default-active="activeIndex" mode="horizontal">
        <el-menu-item style="height:100%;line-height: 80px;" index="1"><router-link to="/ReportList">报告中心</router-link></el-menu-item>
        <el-menu-item style="height:100%;line-height: 80px;" index="2"><router-link to="/DepositionList">分析中心</router-link></el-menu-item>
        <el-menu-item style="height:100%;line-height: 80px;" index="3"><a>帮助</a></el-menu-item>
      </el-menu>
    </div>

  </div>

</template>

<script>
  export default {
    data: () => ({
      activeIndex: "1",
    })
  }
</script>
<style>
  .header-wrapper {
    height: 80px;
    width: 100%;
    left: 0;
    top: 0;
    background-color: #fff;
    line-height: 80px;
    z-index: 100;
  }
  .header-main {
    width: 1140px;
    height: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0 auto;
    border-bottom: 1px solid #dcdfe6;
  }
  .header-logo {
    margin: 0;
    margin-left: 50px;
    float: left;
    font-size: 32px;
    font-weight: 400;
  }
  .header-nav {
    height: 100%;
    float: right;
    background: transparent;
    padding: 0;
    margin: 0;
  }
  .header-nav-item {
    height:100%;
    line-height: 80px;
  }
</style>
