<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="orderNumber" label="序号"/>
    <el-table-column prop="actTime" label="消息时间"/>
    <el-table-column prop="opposite" label="服务商"/>
    <el-table-column prop="content" label="验证码"/>
  </el-table>
</template>

<script>
  export default {
    props: ["data"]
  }
</script>
