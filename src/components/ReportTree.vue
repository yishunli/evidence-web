<template>
    <el-tree ref="tree" :data="items" :props="defaultProps"
    :node-key="treeKey"
    :highlight-current="true"
    :default-expanded-keys="expandedNodeId"
    :current-node-key="nodeId"
    @node-click="handleNodeClick"></el-tree>
</template>

<script>
  export default {
    props: ["caseId", "nodeId"],
    data: () => ({
      items: [],
      treeKey: "nodeId",
      defaultProps: {
        children: 'children',
        label: 'nodeName'
      }
    }),
    computed: {
      expandedNodeId(){
        var nodeIdStr = this.nodeId + ""
        return nodeIdStr.split()
      }
    },
    created(){
      fetch('evidenceApi/reportTree/' + this.caseId)
        .then(res => res.json())
        .then(json => {
            this.items = json.data
          })
        .catch(err => console.warn(err))
    },
    methods:{
      handleNodeClick(item) {
        if(item.children.length == 0) {
          this.$emit('clickTreeNode', item)
        } else {
          return
        }
      }
    },
    watch: {
      nodeId: {
        immediate: true,
        handler (val) {
          if(this.$refs.tree){
            this.$refs.tree.setCurrentKey(val)
          }
        }
      }
    }
  }
</script>
