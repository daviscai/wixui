<template>
<div>
    
    <wix-row class="row1">

      <wix-col span="8" bgColor="#666666">
        <text> span=8 </text>
      </wix-col>

      <wix-col span="8" bgColor="#eeeeee">
        <text> span=8 </text>
      </wix-col>

      <wix-col span="8" bgColor="#666666">
        <text> span=8 </text>
      </wix-col>

    </wix-row>

    <wix-row height="50px" class="row2">

      <wix-col span="8" bgColor="#ffa726">
        <text> span=8 </text>
      </wix-col>

      <wix-col span="12" bgColor="#d500f9" offset="4">
        <text> span=12; offset=4 </text>
      </wix-col>

    </wix-row>

    <text class="t">在列元素之间增加间距</text>
    <wix-row height="50px" gutter="20" class="row2">

      <wix-col gutter="20" span="8" bgColor="#666666">
        <text> span=8 </text>
      </wix-col>

      <wix-col gutter="20" span="8" bgColor="#eeeeee">
        <text> span=8 </text>
      </wix-col>

      <wix-col span="8" bgColor="#666666">
        <text> span=8 </text>
      </wix-col>

    </wix-row>

</div>
</template>

<style scoped>
.row1 {
  margin-top:20px;
  margin-bottom:20px;
      line-height: 30px;
    font-size: 12px;
    text-align: center;
}

.row2 {
  margin-top:20px;
  margin-bottom:20px;
}

.t{
  margin-top:40px;
  color:#cccccc;
}
</style>
