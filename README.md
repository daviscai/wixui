
# wixui

> wixui 基于weex + vue2.0 移动端ui组件，遵循 material design 设计

# Weex工作原理

先简单熟悉一下weex的工作原理，这里引用一下weex官网上的一张图片，[详细信息见官网](https://weex.apache.org/cn/guide/intro/how-it-works.html)

![Weex工作原理](http://upload-images.jianshu.io/upload_images/2843033-a11114f55ceb7478.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/640)

# 开发环境搭建

## weex 开发环境搭建

[关于weex开发环境搭建问题见官方文档](https://weex.apache.org/cn/guide/set-up-env.html)

## android 、iOS 开发环境

[关于native开发环境搭建问题见官方文档](https://weex.apache.org/cn/guide/integrate-to-your-app.html)

# 框架说明


## 项目启动

1. git clone https://github.com/daviscai/wixui.git
2. cd wixui
3. 安装weexpack

```
npm install -g weexpack
```

4. npm install
5. 执行 ./start
6. 访问 http://localhost:8080/web/

### android 启动

```
mkdir platforms
weexpack platform add android
weexpack run android
```

### iOS 启动

```
weexpack platform add ios
weexpack run ios
```
