<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="orderNumber" label="序号"/>
    <el-table-column prop="groupAccount" label="群账号"/>
    <el-table-column prop="groupName" label="群昵称"/>
    <el-table-column prop="memberAccount" label="群成员账号"/>
    <el-table-column prop="memberNickname" label="群成员昵称"/>
    <el-table-column prop="description" label="描述"/>
    <el-table-column prop="deleteFlag" label="删除"/>
  </el-table>

</template>

<script>
  export default {
    props: ["data"]
  }
</script>
