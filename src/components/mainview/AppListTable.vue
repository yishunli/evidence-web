<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="orderNumber" label="序号"/>
    <el-table-column prop="appName" label="应用"/>
    <el-table-column prop="version" label="版本号"/>
    <el-table-column prop="installTime" label="安装日期"/>
    <el-table-column prop="upgradeTime" label="最近更新日期"/>
    <el-table-column prop="packageName" label="包名"/>
  </el-table>
</template>

<script>
  export default {
    props: ["data"]
  }
</script>
