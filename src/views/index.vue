<template>
<div>

  <text class="button" @click="jumpPaper">Paper</text>

  <text class="button" @click="jumpIcon">Icon</text>

  <text class="button" @click="jumpButton">Button</text>

</div>
</template>

<script>
import router from '../router'
import route from '../router/page'

const modal = weex.requireModule('modal')

export default {
  data() {
    return {

    }
  },
  
  methods: {
    jumpPaper () {
      router.push(route.paper.path) 
    },
    jumpIcon () {
      router.push(route.icon.path) 
    },
    jumpButton () {
      router.push(route.button.path) 
    }
  }
}

</script>

<style scoped>
.button{
  margin-top: 50px;
  margin-left:50px;
  background-color:#eeeeee;
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  width:300px;
  height:50px;
}
</style>
