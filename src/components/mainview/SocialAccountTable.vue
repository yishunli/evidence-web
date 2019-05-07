<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="appName" label="应用"/>
    <el-table-column prop="accountId" label="账号"/>
    <el-table-column prop="accountName" label="账号名"/>
    <el-table-column prop="nickname" label="显示名"/>
    <el-table-column prop="password" label="密码"/>
    <el-table-column prop="email" label="邮箱"/>
    <el-table-column prop="phoneNumber" label="手机"/>
    <el-table-column prop="sex" label="性别"/>
    <el-table-column prop="address" label="地址"/>
    <el-table-column prop="deleteFlag" label="删除"/>
  </el-table>
</template>

<script>
  export default {
    props: ["data"]
  }
</script>
