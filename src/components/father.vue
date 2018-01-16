<template>
  <div>
    <h1>我是父组件</h1>
    <button @click="receiveStart">开始请求数据吧</button>
    <son :start="start"></son>

    <div class="computed">
    <h1>演示computed</h1>

    <input type="text" placeholder="数字1" v-model="num1">
    <input type="text" placeholder="数字2" v-model="num2">
    <input type="text" placeholder="数字3" v-model="num3">
    <input type="text" placeholder="得分" v-model="num4">
    </div>
  </div>
</template>

<script>
import son from '@/components/son'
export default {
  components: {son},
  data () {
    return {
      start: false,
      num1: '',
      num2: '',
      num3: '',
    }
  },
  methods: {
    receiveStart () {
      this.start = true
    }
  },
  computed: {
    num4: function () {
      return Number(this.num1) + Number(this.num2) + Number(this.num3);
    }
  }
}
</script>

<style scoped>
.computed {
  border: 1px solid red;
  height: 300px;
}
</style>
