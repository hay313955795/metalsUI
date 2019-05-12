<template>
  <div id="app">
    <Index/>
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'app',
  data() {
     return {
        obj:undefined,
      }
  },
  components: {
    Index
  },
  methods:{
      handleChange (value) {
        this.$message.success('当前数据'+value);
      },
  }
}
</script>

<style>
</style>
