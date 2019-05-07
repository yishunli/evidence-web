<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="orderNumber" label="序号"/>
    <el-table-column prop="actTime" label="时间"/>
    <el-table-column prop="action" label="动作"/>
    <el-table-column prop="opposite" label="对方"/>
    <el-table-column prop="content" label="内容"/>
  </el-table>
</template>

<script>
  export default {
    props: ["data"]
  }
</script>
