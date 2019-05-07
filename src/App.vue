<template>
  <el-container>
    <el-header height="80px">
      <Header/>
    </el-header>
    <el-container>
      <div class="container-main">
        <router-view></router-view>
      </div>
    </el-container>
  </el-container>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
    }
  }
}
</script>
<style>
  html {
    overflow:hidden;
    height:100%;
  }
  body {
    overflow:hidden;
    height:100%;
  }
  .el-container {
    height:100%;
  }
  .container-main{
    width: 100%;
  }
</style>
