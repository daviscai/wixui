<template>
  <div class="wix-row" :class="getClass" :style="getStyle">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'wix-row',
  props: {
    height: {
      type: String,
      default: '30px'
    },
    gutter: {
      type: [Number, String],
      default: ''
    }
  },
  computed: {
    getStyle () {
      let style = {}
      if(this.height) style.height = this.height
      if(this.gutter){
        // 行之间间距
        const gutter = Number(this.gutter)
        const margin = `${gutter / 2}px`
        style.marginTop = margin
        style.marginBottom = margin
      }
      return style
    },
    getClass () {
      return {
      }
    }
  }
}
</script>
 
<style lang="less" src="./style.less" scoped ></style>
