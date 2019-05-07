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
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button @click="addEvidence(scope.row)" type="text" size="small">{{scope.row.id}}</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props: ["data"],
    methods:{
      addEvidence(row){
        alert(row.id)
      }
    }
  }
</script>
