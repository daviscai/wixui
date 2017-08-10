<template>
<div>

  <div class="wix-icon" :class="iconClass" :style="iconStyle" :target="target"  @click="onclick" @longpress="onlongpress" @appear="onappear"  @disappear="ondisappear">
    <text class="wix-md material-icons" :style="mdStyle" >{{icon}}</text>
    <slot></slot>
  </div>

</div>
</template>

<script>


export default {
  name: 'wix-icon',
  props: {
    debugmsg: '',
    
    icon: {
      type: String
    },
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '24px'
    },
    color: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      
    }
  },
  computed: {
    iconClass () {
      let arr = []
      /*
      if (this.circle) arr.push('wix-paper-circle')
      if (this.rounded) arr.push('wix-paper-round')
      arr.push('wix-paper-' + this.zindex)
      arr.push('wix-paper-shadow-' + this.shadow)
      arr.push('wix-paper-pin-' + this.pin)
      */
      return arr
    },
    iconStyle () {
      let style = {}
      style.height = this.size
      style.width = this.size
      return style
    },
    mdStyle () {
      let style = {}
      style.fontSize = this.size
      if (this.color) style.color = this.color
      return style
    }
  },
  created () { 
    let domModule = weex.requireModule('dom')
    // 目前支持ttf、woff文件，不支持svg、eot类型,moreItem at http://www.iconfont.cn/
    domModule.addRule('fontFace', {
      'fontFamily': 'Material Icons', 
      'src': 'url(./fonts/MaterialIcons-Regular.woff)'
    })
  },
  methods: {
    onclick (e) {
      this.$emit('click', e)
    },
    onlongpress (e) {
      this.$emit('longpress', e)
    },
    onappear (e) {
      this.$emit('appear', e)
    },
    ondisappear (e) {
      this.$emit('disappear', e)
    }
  }
}
</script>

<style scoped>

.wix-icon{ 
  align-items:center;
  background: none;
}

.wix-md{
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
</style>
