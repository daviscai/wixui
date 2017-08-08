<template>
<div>
    <wix-paper width="100%" height="100px" zindex="4" bgColor="#eeeeee" textColor="#000000" shadow="1" pin="bottom">
      <div slot="left"><text>left</text></div>
      <div slot="left"><text>left2</text></div>
      <div slot="middle"><text>middle</text></div>
      <div slot="middle"><text>middle2</text></div>
      <div slot="right"><text>right</text></div>
      <div slot="right"><text>right2</text></div>
    </wix-paper>

    <wix-paper width="100%" height="100px" bgColor="#ffa726" textColor="#000000" >
      <div slot="left"><text>left</text></div>
      <div slot="middle"><text>middle</text></div>
      <div slot="right"><text>right</text></div>
    </wix-paper>

    <wix-paper width="100px" height="100px" bgColor="#eeeeee" textColor="#000000">
      <div slot="left"><text>left</text></div>
    </wix-paper>

    <wix-paper width="100px" height="100px" bgColor="#eeeeee" textColor="#000000" pin="right">
      <div slot="left"><text>right</text></div>
    </wix-paper>

</div>
</template>

<!--
### paper 组件的使用示例

paper组件是一种面板，或者容器，使用场景非常多，属于常用且基础组件

<wix-paper width="100%" height="100px" zindex="4" bgColor="#eeeeee" textColor="#000000" shadow="1" ></wix-paper>

属性：
width: 组件宽度， 可以是百分制和数值，数值单位必须是px，weex只支持px，不支持em等其他度量单位
height: 组件高度，可以是百分制和数值，数值单位必须是px，weex只支持px，不支持em等其他度量单位
zindex：z-index 层级, Weex 目前不支持 z-index 设置元素层级关系，但靠后的元素层级更高，因此，对于层级高的元素，可将其排列在后面
bgColor： 组件背景颜色
textColor：组件内字体颜色
shadow： 组件阴影，数值有1，2，3，4 共4种阴影效果
circle： 是否为圆形，true|false， 默认为false
rounded: 是否为圆角，true|false， 默认为true，圆角固定为2px
pin: 钉在哪里， bottom | right , positon=fixed 

paper组件提供3个插槽，分别为左，中，右，每个插槽都可以插入多个组件

-->
