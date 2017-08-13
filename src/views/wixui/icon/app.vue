<template>
<div>

    <wix-icon icon="close" size="30px" ></wix-icon>

    <wix-icon icon="icon-appreciate" size="30px" color="#7b1fa2"></wix-icon>

    <wix-icon icon="autorenew" size="30px" color=""></wix-icon>

    <wix-icon icon="home" size="30px" color=""></wix-icon>

    <text v-if="isShow">weex sdk 0.10.0 ，不支持iconfont(v0.12.0+)， 请在web下查看效果</text>

</div> 
</template>

<script>

export default {
  data () {
    return {
      isShow: false
    }
  },
  created () {
    if ( weex.config.env.platform != 'Web' ) {
      this.isShow = true
    }
  }
}
</script>