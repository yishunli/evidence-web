<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="orderNumber" label="序号"/>
    <el-table-column prop="appName" label="应用"/>
    <el-table-column prop="eventCount" label="事件数量"/>
    <el-table-column prop="contactsCount" label="联系人数量"/>
    <el-table-column prop="fileCount" label="文件数量"/>
    <el-table-column prop="deleteCount" label="删除数量"/>
    <el-table-column prop="totalCount" label="总量"/>
  </el-table>
</template>

<script>
  export default {
    props: ["data"]
  }
</script>
