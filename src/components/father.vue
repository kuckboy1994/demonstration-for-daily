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
    <br>
    <div class="watch">
      <h1>演示watch</h1>

      <input type="text" placeholder="数字1" v-model="obj.a">
      <input type="text" placeholder="数字2" v-model="obj.b">
      <input type="text" placeholder="数字3" v-model="obj.c">
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
      obj: {
        a: 100,
        b: '',
        c: ''
      }
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
  },
  watch: {
    // obj: {
    //   handler: function (val, oldVal) {
    //     console.log(val, oldVal)
    //   },
    //   deep: true
    // },
    // 'obj.a': function (val, oldVal) {
    //   console.log('new: %s, old: %s', val, oldVal)
    // },
    'obj.b': function (val, oldVal) {
      this.obj.c = this.obj.a - Number(this.obj.b)
    },
    'obj.c': function (val, oldVal) {
      this.obj.b = this.obj.a - Number(this.obj.c)
    },
  }
}
</script>

<style scoped>
.computed {
  border: 1px solid red;
  height: 150px;
}
.watch {
  border: 1px solid red;
  height: 150px;
}
</style>
