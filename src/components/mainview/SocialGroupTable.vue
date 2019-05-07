<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="orderNumber" label="序号"/>
    <el-table-column prop="accountId" label="账号"/>
    <el-table-column prop="nickname" label="昵称"/>
    <el-table-column prop="count" label="事件数量"/>
    <el-table-column prop="deleteFlag" label="删除"/>
  </el-table>
</template>

<script>
  export default {
    props: ["data"]
  }
</script>
