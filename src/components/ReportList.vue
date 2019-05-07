<template>
  <div>
    <div class="content-main">
      <el-table :data="reportList" style="width: 100%;margin-top:50px">
        <el-table-column prop="caseId" label="报告编号"/>
        <el-table-column prop="caseName" label="案件名称"/>
        <el-table-column prop="evidenceName" label="物证名称"/>
        <el-table-column prop="investigator" label="调查员"/>
        <el-table-column prop="softwareName" label="软件名称"/>
        <el-table-column prop="reportTime" label="报告时间"/>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="addClick(scope.row)" type="text">添加</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div style="position:absolute;bottom:0;right:0;width: 500px;">
      <el-table :data="selectedReport">
        <el-table-column prop="caseId" label="报告编号"/>
        <el-table-column prop="caseName" label="案件名称"/>
        <el-table-column prop="evidenceName" label="物证名称"/>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="removeClick(scope.row)" type="text">移除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <button v-show="selectedReport.length > 0" type="text" @click="analyzeClick">分析取证</button>
    </div>
  </div>
</template>

<script>
  export default {
    data: () =>({
      reportList:[],
      selectedReport:[]
    }),
    created(){
      fetch('evidenceApi/report/', {
          method: 'POST',
          headers: {
                'Content-Type': 'application/json',
          },
          body: JSON.stringify({})
        })
        .then(res => res.json())
        .then(json => this.reportList = json.data )
        .catch(err => console.warn(err))
    },
    methods:{
      addClick(row){
        var index = this.selectedReport.indexOf(row);
        if (index < 0) {
          this.selectedReport.push(row)
        }
      },
      removeClick(row){
        var index = this.selectedReport.indexOf(row);
        if (index > -1) {
          this.selectedReport.splice(index, 1);
        }
      },
      analyzeClick(){
        this.$router.push({name: "ReportWorkbench", params:{reports: this.selectedReport}})
      }
    }
  }
</script>

<style>

  .content-main {
    width: 1140px;
    height: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0 auto;
    border-bottom: 1px solid #dcdfe6;
  }
</style>
