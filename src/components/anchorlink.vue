<template>
    <div>
        <ul class="left">
            <li v-for="(item, index) in leftlist" 
                :class="{'selected': index === selectIndex}" 
                @click="changeSelect(index)"
                :key="index">{{item}}</li>
        </ul>
        <div class="content">
            <section v-for="(item, index) in leftlist" 
                class="section-article"
                :key="index">page {{item}}</section>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            leftlist: [1,2,3,4,5,6,7,8,9,10],
            selectIndex: 0,
        }
    },
    created () {
        document.title = '平滑跳转锚链接'
    },
    methods: {
        changeSelect (index) {
            this.selectIndex = index
        }
    },

}
</script>

<style scoped>
.left {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 20vw;
    background: palegoldenrod;
    overflow: auto;
}
.left li {
    height: 100px;
    line-height: 100px;
    border-bottom: 1px solid blueviolet;
}
.selected {
    background: blue;
    color: white;
}
.section-article {
    background: saddlebrown;
    width: 80vw;
    margin-left: 20vw;
    height: 300px;
    color: white;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
}
</style>
