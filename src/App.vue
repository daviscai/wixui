<template>
  <div @androidback="back">
    <text class="button" @click="back" >返回</text>
    <router-view style="flex:1"></router-view>
  </div>
  
</template>

<script>
  
  export default {
   
    methods: {
      back: function () {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
.button{
  margin-top: 10px;
  background-color:#eeeeee;
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
 
}
</style>