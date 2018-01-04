<template>
  <div>
    <h2>我是子组件</h2>
    {{start ? '父组件让我请求数据': '父组件没让我请求数据'}}
    <br>
    {{receiveData == '' ? '我还没收到数据呢': receiveData}}
  </div>
</template>

<script>
export default {
	props: {
		start: {
	      type: Boolean,
	      default: false
	    },
	},
	data () {
		return {
			receiveData: ''
		}
	},
	methods: {
		requestData () {
			setTimeout(()=> {
				this.receiveData = '我是收到的数据'
			}, 1000)
		}
	},
	watch: {
		start: function (newval) {
			if (newval) {
				this.requestData()
			}
		}
	},
	// mounted () {
	// 	this.requestData()
	// }
}
</script>

<style scoped>

</style>
