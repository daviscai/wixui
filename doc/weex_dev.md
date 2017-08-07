### weex 开发 App 应用


### 1. 全局安装 weexpack, weex-toolkit
  npm install -g weexpack  
  npm install -g weex-toolkit

### 2. clone https://github.com/ElemeFE/weex-vue-starter-kit.git


### 3. 安装依赖
cd weex-vue-starter-kit

```
cnpm install
```

### 4. 添加android, ios 应用模板
```
# run android
weexpack platform add android
weexpack run android

# run ios
weexpack platform add ios
weexpack run ios
```

### 5. 问题

#### Environment variable $ANDROID_HOME not found !
weexpack run android 需要本地有android sdk

```
// MAC OS下安装和配置android-sdk
brew cask install android-sdk
```
配置环境变量
```
配置 ~/.bash_profile ,

export ANDROID_HOME="/usr/local/share/android-sdk"

然后source ~/.bash_profile
```

#### Unsupported major.minor version 52.0
brew cask install android-sdk 安装失败，提示版本不支持，需安装jdk8， java -version 可看jdk版本
```
brew cask install java
```
安装完后， java -version
```
$ java -version
java version "1.8.0_144"
Java(TM) SE Runtime Environment (build 1.8.0_144-b01)
Java HotSpot(TM) 64-Bit Server VM (build 25.144-b01, mixed mode)
```

#### Error: No android devices found.
没有找到安卓设备，需通过usb连接手机，并在手机上设置允许开发者调试


#### gradle.org 下载包太慢问题
把安装包下载到本地，比如，一直提示下载中，

Downloading https://services.gradle.org/distributions/gradle-2.14.1-all.zip

先把安装包下载下来，然后把安装包放到

```
// 8bnwg5hd3w55iofp58khbp6yv 是随机目录，根据自己的目录来，系统会自动创建
~/.gradle/wrapper/dists/gradle-2.14.1-all/8bnwg5hd3w55iofp58khbp6yv/  
```
重新执行 weexpack run android

---

添加阿里镜像加速，修改 platforms/android/build.gradle 文件
```
buildscript {
    repositories {
        // maven { url "http://mvnrepo.alibaba-inc.com/mvn/repository" }
        maven{ url 'http://maven.aliyun.com/nexus/content/groups/public/'}
        // mavenCentral()
        // jcenter()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:2.2.2'
    }
}

allprojects {
    repositories {
        // maven { url "http://mvnrepo.alibaba-inc.com/mvn/repository" }
        maven{ url 'http://maven.aliyun.com/nexus/content/groups/public/'}
        // mavenCentral()
        // jcenter()
    }
}
```
重新执行：weexpack run android
