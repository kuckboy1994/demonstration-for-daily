<template>
  <div>
    <h1>我是父组件</h1>
    <button @click="receiveStart">开始请求数据吧</button>
    <son :start="start"></son>
  </div>
</template>

<script>
import son from '@/components/son'
export default {
  components: {son},
  data () {
    return {
      start: false
    }
  },
  methods: {
    receiveStart () {
      this.start = true
    }
  }
}
</script>

<style scoped>

</style>
