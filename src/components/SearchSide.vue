<template>
  <div>
    <div>
      <el-form ref="form" :model="form" label-width="80px" @submit.native.prevent>
        <el-form-item>
          <el-input v-model="form.keyword" placeholder="关键字"></el-input>
        </el-form-item>
        <!-- <el-form-item>
          <el-col :span="50">
            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="起始时间" v-model="form.beginTime"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="50">
            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="截止时间" v-model="form.endTime"></el-date-picker>
          </el-col>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <div v-for="searchItem in searchResult" :key="searchItem.id">
        <el-card>
          <div slot="header">
            <span>{{getCardName(searchItem.modelType)}}</span>
            <el-button type="text" @click="locate(searchItem)">定位</el-button>
          </div>
          <div>
            <ChatMessageCard v-if="searchItem.modelType == 'chat_message'" :searchItem="searchItem"/>
            <div v-else>{{searchItem.id}}</div>
          </div>
        </el-card>
        <el-divider></el-divider>
      </div>
    </div>
  </div>
</template>

<script>
  import ChatMessageCard from './searchcard/ChatMessageCard.vue'
  export default {
    components:{ChatMessageCard},
    props: ["caseIds"],
    data: () => ({
      form: {
        caseIdList:[],
        keyword: '',
        beginTime: '',
        endTime: ''
      },
      searchResult:[]
    }),
    computed: {
    },
    created(){
    },
    methods:{
      onSubmit() {
        this.form.caseIdList = this.caseIds
        fetch('evidenceApi/evidence', {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.form)
          })
          .then(res => res.json())
          .then(json => this.searchResult = json.data )
          .catch(err => console.warn(err))
      },
      getCardName(modelType){
        if("chat_message" == modelType){
          return "短信/聊天信息"
        } else {
          return modelType
        }
      },
      locate(searchItem){
        this.$emit("locateInTree", searchItem)
      }
    }
  }
</script>
