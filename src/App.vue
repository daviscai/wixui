<template>
<div>
  <a class="button" :href="paperPath">
    <text class="text">Paper</text>
  </a>
</div>
</template>

<script>
import route from 'router/page'
import ip from '../config'

export default {
  data() {
    return {
      paperPath: ''
    }
  },
  created: function () {
    this.paperPath = this.getBaseUrl() + route.paper.jsPath + '.js'
  },
  methods: {
    getBaseUrl () {
      return 'http://192.168.199.138:8080/dist/weex/'
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
  width:100px;
  height:50px;
}
</style>
