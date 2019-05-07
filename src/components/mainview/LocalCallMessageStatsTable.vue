<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="orderNumber" label="序号"/>
    <el-table-column prop="accountId" label="ID"/>
    <el-table-column prop="nickname" label="昵称"/>
    <el-table-column prop="phoneNumber" label="手机"/>
    <el-table-column prop="email" label="邮箱"/>
    <el-table-column prop="address" label="归属地"/>
    <el-table-column prop="count" label="数量"/>
  </el-table>
</template>

<script>
  export default {
    props: ["data"]
  }
</script>
