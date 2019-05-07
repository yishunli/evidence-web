<template>
  <div>
    <div v-html="searchItem.avatar"></div>
    <div v-html="searchItem.displayName"></div>
    <div v-html="searchItem.actTime"></div>
    <div v-html="searchItem.content"></div>
  </div>
</template>

<script>
  export default {
    props: ["searchItem"],
    data: () => ({
    }),
    computed: {
    }
  }
</script>
