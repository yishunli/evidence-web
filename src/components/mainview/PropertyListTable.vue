<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="name" label="属性" width="300"/>
    <el-table-column prop="value" label="内容"/>
  </el-table>
</template>

<script>
  export default {
    props: ["data"]
  }
</script>
