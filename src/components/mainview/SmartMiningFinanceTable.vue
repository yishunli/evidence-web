<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="orderNumber" label="序号"/>
    <el-table-column prop="actTime" label="消息时间"/>
    <el-table-column prop="action" label="用户动作"/>
    <el-table-column prop="content" label="详情"/>
  </el-table>
</template>

<script>
  export default {
    props: ["data"]
  }
</script>
