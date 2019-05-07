<template>
    <el-container>
      <el-aside width="230px">
          <ReportTree :caseId="caseId" :nodeId="nodeId" @clickTreeNode="clickTreeNode"/>
      </el-aside>
      <el-main>
          <MainContent :caseId="caseId" :nodeId="nodeId" :modelType="modelType"/>
      </el-main>
    </el-container>
</template>

<script>

import ReportTree from './ReportTree.vue'
import MainContent from './MainContent.vue'
export default {
    props:["caseId", "nodeId", "modelType"],
    data: () => ({
    }),
    components:{
        ReportTree,
        MainContent
    },
    methods:{
        clickTreeNode(treeNode){
            this.$emit('clickTreeNode', treeNode)
        }
    }
}
</script>

<style>

</style>
