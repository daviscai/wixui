<template>

<div>

<a class="wix-button" :href="href" :target="target" :labelPosition="labelPosition" :disabled="disabled" 
:class="buttonClass" :style="buttonStyle" :bgColor="bgColor" :color="color" :rippleColor="rippleColor" @click="onclick" @longpress="onlongpress" @appear="onappear"  @disappear="ondisappear"> 
  <text  v-if="label && labelPosition === 'left'" >{{label}}</text> 
  <icon :icon="icon"  :size="iconSize" ></icon>
  <text  v-if="label && labelPosition === 'right'" >{{label}}</text> 
</a>

  
</div>

</div>
</template>

<script>
import icon from '../icon'

export default {
  name: 'wix-button',
  components: {
    icon
  },
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
    color: {
      type: String,
      default: ''
    },
    shadow: { // 边框阴影, box-shadow仅仅支持iOS
      type: String,
      default: '0'
    },
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String
    },
    icon: {
      type: String
    },
    iconSize: {
      type: String
    },
    label: {
      type: String
    },
    labelPosition: {
      type: String,
      default: 'right'
    },
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rippleColor: {
      type: String
    }
  },
  computed: {
    buttonStyle () {
      return {
        'background-color': this.backgroundColor,
        'color': this.color
      }
    },
    buttonClass () {
      return {
        'wix-button-primary': this.primary,
        'wix-button-secondary': this.secondary
      }
    }
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

.wix-button{
  min-height:0px;
  -webkit-flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
}


</style>
