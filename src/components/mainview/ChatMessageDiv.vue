<template>
  <div>
    <el-row :gutter="24" v-for="message in data" :key="message.id">
      <el-col :span="message.flowDirection == 0 ? 20 : 6"  :offset="message.flowDirection == 0 ? 0 : 18">
        <el-row :gutter="24">
          <el-col :span="24">
            <div>头像：{{message.avatar}}</div>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="24">
            <div>{{message.actTime}}</div>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="24">
            <div>{{message.content}}</div>
          </el-col>
        </el-row>
        <br/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    props: ["data"]
  }
</script>
