<template>
<div>

<div class="wix-paper"  :class="paperClass" :style="paperStyle">
  <div class="wix-paper-left"><slot name="left" ></slot> </div>
  <div class="wix-paper-middle"><slot name="middle" ></slot> </div>
  <div class="wix-paper-right"><slot name="right" ></slot> </div>
</div>

  <div><text>{{debugmsg}}</text></div>
</div>
</template>

<script>
export default {
  name: 'wix-paper',
  props: {
    debugmsg: '',
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

      /*
      if (this.pin === 'bottom') {
        if(this.height.indexOf('px') > -1 ){
          let height = parseInt(this.height.replace(/px/, ''))
          let top = this.getScreenHeight() - height
          this.debugmsg = top
          style.position = 'fixed'
          style.bottom = '0px'
          style.top = '0px'
        }
      }else if (this.pin === 'right') {
        if(this.width.indexOf('px') > -1 ){
          let width = parseInt(this.width.replace(/px/, ''))
          let left = this.getScreenWidth() - width
          style.position = 'absolute'
          style.left = left + 'px'
        }
      }
      */
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

<style scoped>

.wix-paper{
  min-height:0px;
  -webkit-flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  background-color: #cccccc;
}
.wix-paper-left{
  flex-direction: row;
  margin-left: 20px;
}
.wix-paper-middle{
  flex-direction: row;
}
.wix-paper-right{
  flex-direction: row;
  margin-right: 20px;
}
.wix-paper-round {
  border-radius: 2px;
}
.wix-paper-circle {
  border-radius: 50%;
}
.wix-paper-1 {
  z-index: 1;
}
.wix-paper-2 {
  z-index: 2;
}
.wix-paper-3 {
  z-index: 3;
}
.wix-paper-4 {
  z-index: 4;
}
.wix-paper-5 {
  z-index: 5;
}
.wix-paper-shadow-1{
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
}
.wix-paper-shadow-2{
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.37);
}
.wix-paper-shadow-3{
  box-shadow: 0px 14px 45px rgba(0, 0, 0, 0.45);
}
.wix-paper-shadow-4{
  box-shadow: 0px 19px 60px rgba(0, 0, 0, 0.6);
}
.wix-paper-pin-top{

}
.wix-paper-pin-bottom{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.wix-paper-pin-right{
  position: fixed;
  right: 0;
}
</style>
