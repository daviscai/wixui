<template>
<div>

<div class="wix-paper"  :class="paperClass" :style="paperStyle">
  <div class="wix-paper-left"><slot name="left" ></slot> </div>
  <div class="wix-paper-middle"><slot name="middle" ></slot> </div>
  <div class="wix-paper-right"><slot name="right" ></slot> </div>
</div>

</div>
</template>

<script>
export default {
  name: 'wix-paper',
  props: {

    circle: {
      type: Boolean,
      default: false // 高宽一样才是圆形，否则就是椭圆
    },
    rounded: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100px'
    },
    bgColor: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: ''
    },
    zindex: {
      type: String,
      default: '1'
    },
    shadow: { // 边框阴影, box-shadow仅仅支持iOS
      type: String,
      default: '0'
    },
    pin: { // 钉在哪里，top | bottom | left | right
      type: String,
      default: 'top'
    }
  },
  computed: {
    paperClass () {
      let arr = []
      if (this.circle) arr.push('wix-paper-circle')
      if (this.rounded) arr.push('wix-paper-round')
      arr.push('wix-paper-' + this.zindex)
      arr.push('wix-paper-shadow-' + this.shadow)
      arr.push('wix-paper-pin-' + this.pin)
      return arr
    },
    paperStyle () {
      let style = {}
      style.height = this.height
      style.width = this.width
      style.color = this.textColor
      style.backgroundColor = this.bgColor  // background-color 类似这种名称要用驼峰式
      return style
    }
  },
  methods: {
    getScreenHeight () {
      let platform = weex.config.env.platform.toLowerCase()
      if( platform === 'web' ) {
        return document.documentElement.clientHeight
      }else if( platform === 'android' ){
        return 568
      }else if ( platform === 'ios' ) {
        return 568
      }
    },
    getScreenWidth () {
      let platform = weex.config.env.platform.toLowerCase()
      if( platform === 'web' ) {
        return document.documentElement.clientWidth
      }else if( platform === 'android' ){
        return 320
      }else if ( platform === 'ios' ) {
        return 320
      }
    }
  }
}
</script>

<style lang="less" src="./style.less" scoped ></style>