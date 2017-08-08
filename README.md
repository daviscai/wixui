
# wixui

> wixui 基于weex + vue2.0 移动端ui组件，遵循 material design 设计

## 项目启动

1. git clone https://github.com/daviscai/wixui.git
2. cd wixui
4. npm install 或者 cnpm install 或者 yarn
5. 执行 ./start
6. 访问 http://localhost:8080/web/

### android 启动

关于 weexpack 可以看 doc/weex_dev.md

```
npm run init  // 自动生成 android.config.json 配置文件
weexpack platform add android
weexpack run android
```

在手机上安装成功后，以后修改代码，无需重新编译安装，在手机上退出App，重启就可以生效了

注意：要确保手机能访问电脑的 http://192.168.23.6:8080/dist/weex/App.js  这个weex入口文件（同一网段），192.168.23.6 这个是电脑的本地ip

### iOS 启动

```
weexpack platform add ios
weexpack run ios
```

### 感谢
项目基础构建参考了 weex-vue-starter-kit 和 weex-frame ，特此感谢！
