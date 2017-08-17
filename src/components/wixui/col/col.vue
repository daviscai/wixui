<template>
  <div class="wix-col" :class="getClass" :style="getStyle">
    <slot></slot>
  </div>
</template>

<script>
const modal = weex.requireModule('modal')

export default {
  name: 'wix-col',
  props: {
    span: {
      type: [Number, String],
      default: 0
    },
    offset: [Number, String],
    bgColor: String,
    gutter: {
      type: [Number, String],
      default: ''
    }
  },
  computed: {
    getStyle() {
      let style = {}
      const gutter = Number(this.gutter)
      const padding = `${gutter / 2}px`
      if(this.gutter){
        style.marginLeft = padding
        style.marginRight = padding
       
      }
      if( this.bgColor ) style.backgroundColor = this.bgColor 
     
      return style
    },
    getClass () {
      let arr = []
      if (this.span) arr.push('wix-col-' + this.span)
      if (this.offset) arr.push('wix-col-offset-' + this.offset)
      return arr
    }
  }
}
</script>
 
<style lang="less" src="./style.less" scoped ></style>
