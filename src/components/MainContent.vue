<template>
    <div>
      <PropertyListTable v-if="modelType == 'report_summary'" :data="items"/>
      <PropertyListTable v-else-if="modelType == 'material_evidence'" :data="items"/>
      <PropertyListTable v-else-if="modelType == 'owner_info'" :data="items"/>
      <AppListTable v-else-if="modelType == 'app_list'" :data="items"/>
      <AppStatisticTable v-else-if="modelType == 'app_statistic'" :data="items"/>
      <AccountTable v-else-if="modelType == 'account'" :data="items"/>
      <AddressBookTable v-else-if="modelType == 'address_book'" :data="items"/>
      <LocalCallMessageStatsTable v-else-if="modelType == 'local_call_message_stats'" :data="items"/>
      <MdiaFileTable v-else-if="modelType == 'media_file'" :data="items"/>
      <SmartMiningCommonTable v-else-if="modelType == 'smart_mining_common'" :data="items"/>
      <SmartMiningFinanceTable v-else-if="modelType == 'smart_mining_finance'" :data="items"/>
      <SmartMiningAuthCodeTable v-else-if="modelType == 'smart_mining_auth_code'" :data="items"/>
      <PropertyListTable v-else-if="modelType == 'social_account'" :data="items"/>
      <SocialGroupTable v-else-if="modelType == 'social_group'" :data="items"/>
      <SocialFriendTable v-else-if="modelType == 'social_friend'" :data="items"/>
      <SocialGroupMemberTable v-else-if="modelType == 'social_group_member'" :data="items"/>
      <OperationTable v-else-if="modelType == 'operation'" :data="items"/>
      <OperationOppositeTable v-else-if="modelType == 'operation_opposite'" :data="items"/>
      <EmailContactTable v-else-if="modelType == 'email_contact'" :data="items"/>
      <ChatMessageDiv v-else-if="modelType == 'chat_message'" :data="items"/>
    </div>
</template>

<script>
  import PropertyListTable from './mainview/PropertyListTable.vue'
  import AppListTable from './mainview/AppListTable.vue'
  import AppStatisticTable from './mainview/AppStatisticTable.vue'
  import AccountTable from './mainview/AccountTable.vue'
  import AddressBookTable from './mainview/AddressBookTable.vue'
  import LocalCallMessageStatsTable from './mainview/LocalCallMessageStatsTable.vue'
  import MdiaFileTable from './mainview/MdiaFileTable.vue'
  import SmartMiningCommonTable from './mainview/SmartMiningCommonTable.vue'
  import SmartMiningFinanceTable from './mainview/SmartMiningFinanceTable.vue'
  import SmartMiningAuthCodeTable from './mainview/SmartMiningAuthCodeTable.vue'
  import SocialGroupTable from './mainview/SocialGroupTable.vue'
  import OperationTable from './mainview/OperationTable.vue'
  import SocialFriendTable from './mainview/SocialFriendTable.vue'
  import SocialGroupMemberTable from './mainview/SocialGroupMemberTable.vue'
  import OperationOppositeTable from './mainview/OperationOppositeTable.vue'
  import EmailContactTable from './mainview/EmailContactTable.vue'
  import ChatMessageDiv from './mainview/ChatMessageDiv.vue'


  export default {
    name: 'MainContent',
    components: {
      PropertyListTable,
      AppListTable,
      AppStatisticTable,
      AccountTable,
      AddressBookTable,
      LocalCallMessageStatsTable,
      MdiaFileTable,
      SmartMiningCommonTable,
      SmartMiningFinanceTable,
      SmartMiningAuthCodeTable,
      SocialGroupTable,
      OperationTable,
      SocialFriendTable,
      SocialGroupMemberTable,
      OperationOppositeTable,
      EmailContactTable,
      ChatMessageDiv
    },
    props: ["caseId", "nodeId", "modelType"],
    data: () => ({
      items: []
    }),
    computed: {
    },
    created(){
      // fetch('api/reportTree/' + this.caseId)
      //   .then(res => res.json())
      //   .then(json => this.items = json )
      //   .catch(err => console.warn(err))
    },
    watch: {
        nodeId: {
          immediate: true,
          handler (val) {
            this.nodeId = val
            fetch('evidenceApi/evidence/' + this.caseId + "/" + this.nodeId)
              .then(res => res.json())
              .then(json => {
                if(json.data.length > 0){
                  if("report_summary" == this.modelType 
                    || "material_evidence" == this.modelType
                    || "owner_info" == this.modelType
                    || "social_account" == this.modelType){
                    this.items = json.data[0].pairs
                  } else {
                    this.items = json.data
                  }
                }
              }).catch(err => console.warn(err))
          }
        }
    }
  }
</script>
