<template>
<div>

  <div class="wix-icon" :class="iconClass" :style="iconStyle" :target="target"  @click="onclick" @longpress="onlongpress" @appear="onappear"  @disappear="ondisappear">
    <text class="wix-md material-icons" :style="mdStyle" >{{getFontName}}</text>
    <slot></slot>
  </div>

</div>
</template>

<script>
//引入he模块，使用它解决weex-template-compiler在编译阶段进行decode
import he from 'he'

// 弹窗，类似 alert debug
const modal = weex.requireModule('modal')
export default {
  name: 'wix-icon',
  props: {
    
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
      iconItems:{
        'close': '&#xE5CD;',
        'icon-appreciate': '&#xe644;'
      }
    }
  },
  computed: {
    iconClass () {
      let arr = []
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
    },
    //匹配对应的字体图标的unicode
    getFontName: function() {
      if(this.iconItems[this.icon]){
        return he.decode(this.iconItems[this.icon])
      }else{
        return this.icon
      }
    }
  },
  created () { 
    //此url可以是指向本地字体图标文件路径 也可以直接用阿里巴巴字体图标库的的字体图标地址 ,比如'https://at.alicdn.com/t/font_3ppcziztn5wpcik9.ttf'
    let bundleUrl = weex.config.bundleUrl
    let url = bundleUrl.split('/').slice(0, -1).join('/')
    url = url.replace('#', '')
    url +=  '/fonts/MaterialIcons-Regular.ttf'
    let domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      'fontFamily': 'Material Icons',
      'src': 'url("' + url + '")'
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

<style lang="less" src="./style.less" scoped ></style>
