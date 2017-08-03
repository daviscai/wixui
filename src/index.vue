<template>
  <div class="container">
      <image src="http://ata2-img.cn-hangzhou.img-pub.aliyun-inc.com/7d42775b8f0d0c86589082dc9ee179c2.png" class="bannar-image"/>
      <text @click="changeMessage" class="message">{{ message }}</text>
      <text class="quotes">{{ quotes }}</text>

      <a href="javascript:;" @click="makeCall">make call</a> <br /><br />
      <div class="block"></div>
      <a href="javascript:;" @click="photo">拍照</a> <br /><br />
      <div class="block"></div>
      <a href="javascript:;" @click="info">设备信息</a> <br /><br />
      <div class="block"></div>
      <span>{{ infomsg }}</span>

  </div>
</template>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bannar-image {
    width: 200px;
    height: 200px;
  }

  .message {
    padding-top: 20px;
    padding-bottom: 40px;
    color: #0055dd;
    font-size: 28px;
  }

  .quotes {
    font-size: 16px;
    color: #666;
  }
  .block{
      display: block;
      height: 30px;
  }
</style>

<script>
import Nat from 'natjs'
  export default {
    data() {
      return {
        message: 'Welcome to Use Weexpack!',
        quotes: 'A Tool To Build WEEX Faster',
        infomsg: ''
      };
    },
    methods: {
      makeCall() {
        // Make a phone call
        Nat.call('10086')
      },
      photo() {
        // Take a photo
        Nat.camera.captureImage((err, ret) => {
          console.log('Path: ', ret.path)
        })
      },
      info() {
        let _this = this
        // Get device info
        Nat.device.info((err, ret) => {
          // console.log('Info: ', ret)
          _this.infomsg = JSON.stringify(ret)
        })
      },
      changeMessage() {
        this.message = 'You click it!';
      }
    }
  }










</script>
