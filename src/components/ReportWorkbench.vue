<template>
  <el-container>
    <el-aside width="150px">
        <el-tree ref="tree" 
        :data="reports" 
        :props="defaultProps" 
        node-key="caseId" 
        :highlight-current="true"
        :current-node-key="caseId" 
        @node-click="handleNodeClick"/>
    </el-aside>
    <el-container>
      <ReportTreeWithContent v-for="report in reports" 
      :key="report.caseId" 
      v-show="report.caseId == caseId" 
      :caseId="report.caseId" 
      :nodeId="report.nodeId"
      :modelType="report.modelType"
      @clickTreeNode="clickTreeNode"/>
      <el-aside width="500px">
          <SearchSide :caseIds="caseIds" v-on:locateInTree="locateInTree"/>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
import SearchSide from './SearchSide.vue'
import ReportTreeWithContent from './ReportTreeWithContent.vue'

export default {
  components: {
    ReportTreeWithContent,
    SearchSide
  },
  data:() => ({
    reports: [],
    caseId: "",
    defaultProps: {
      children: "children",
      label: "evidenceName"
    }
  }),
  computed:{
    caseIds(){
      var caseIds = []
      this.$route.params.reports.forEach(element => {
        caseIds.push(element.caseId)
      });
      return caseIds
    }
  },
  created(){
    this.reports = this.$route.params.reports
    this.reports.forEach(report => {
      report.nodeId = 0,
      report.modelType = "report_summary"
    });
    this.caseId = this.reports[0].caseId
  },
  methods:{
    handleNodeClick(treeNode){
      this.caseId = treeNode.caseId
    },
    locateInTree(searchItem){
      this.caseId = ""
      this.caseId = searchItem.caseId
      this.$refs.tree.setCurrentKey(this.caseId)
      this.reports.forEach(report => {
        if(report.caseId == this.caseId){
          report.nodeId = searchItem.nodeId
          report.modelType = searchItem.modelType
        }
      })
    },
    clickTreeNode(treeNode){
      this.caseId = ""
      this.caseId = treeNode.caseId
      this.$refs.tree.setCurrentKey(this.caseId)
      this.reports.forEach(report => {
        if(report.caseId == treeNode.caseId){
          report.nodeId = treeNode.nodeId
          report.modelType = treeNode.modelType
        }
      })
    }
  }
}
</script>

<style>

</style>
