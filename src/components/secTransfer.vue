<template>
  <div class="sectransfer">
      <div class="left-box">
          左侧
      </div>
      <div class="center-box">
          <button>向右添加》</button>
          <br>
          <button>《向左删除</button>
      </div>
      <div class="right-box">
          右侧
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.sectransfer {
    overflow: hidden;
}
.center-box {
    width: 100px;
    height: 400px;
    float: left;
}
.left-box {
    border: 1px solid red;
    width: 200px;
    height: 400px;
    float: left;
}
.right-box {
    border: 1px solid red;
    width: 200px;
    height: 400px;
    float: left;
}
</style>
