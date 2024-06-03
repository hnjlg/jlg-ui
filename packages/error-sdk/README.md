# 错误监控sdk

## 痛点

------


- 用户错误测试环境复现耗时太长或者无法复现只能去用户电脑上查看
- 用户错误感知不及时，用户发现错误->反馈问题->到达开发之间沟通成本高
- 帮助开发定位错误、调试代码信息少

## 解决手段

------

- 定位源码

  ​	打包生成的source-map源码，将错误信息通过source-map反编译能够得到具体是项目源码中哪个源文件哪行哪列报错

- 播放录屏

  ​	把错误发生前一段时间（时间可自定义）的用户的操作录制下来，然后通过回放来还原错误

- 记录用户行为

  ​	通过前两种方式可以解决大部分问题，假如用户做了很多操作，操作的间隔超过了单次录屏时长，录制的视频可能是不完整的，此时可以借助用户行为来分析用户的操作（比如用户切换页面、鼠标行为、键盘敲击），帮助复现问题

## 设计思路

------

一个完整的前端监控平台包括3个部分*数据采集与上报、数据分析与存储、数据展示*

https://camo.githubusercontent.com/1d05652affee4c881bb7bfa9e7f2c9cc703edf3e0910a7e2917044c40ed4069f/68747470733a2f2f70392d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f32313131616231326637343534366139623537306561386635666435326363397e74706c762d6b3375316662706663702d77617465726d61726b2e696d6167653f

https://camo.githubusercontent.com/3aab4821eada5e404bcf3081a773e9d29dc17d763eca9a584a7aab6c32c99bc6/68747470733a2f2f70312d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f62313761343339383465333934353139396336633466636164373465633666367e74706c762d6b3375316662706663702d77617465726d61726b2e696d6167653f

### 数据采集与上报

`设计成sdk创建的形式，接入到各项目中且兼容多技术栈`

错误信息是最基础也是最重要的数据，错误信息主要分为下面几类

- JavaScript代码运行错误、语法错误
- 异步错误
- 静态资源加载错误
- 接口请求错误

#### 错误捕获方式

1）try/catch

只能捕获代码常规的运行错误，语法错误和异步错误不能捕获到

示例：

```
// 示例1：常规运行时错误，可以捕获 ✅
 try {
   let a = undefined;
   if (a.length) {
     console.log('111');
   }
 } catch (e) {
   console.log('捕获到异常：', e);
}

// 示例2：语法错误，不能捕获 ❌
try {
  const notdefined,
} catch(e) {
  console.log('捕获不到异常：', 'Uncaught SyntaxError');
}

// 示例3：异步错误，不能捕获 ❌
try {
  setTimeout(() => {
    console.log(notdefined);
  }, 0)
} catch(e) {
  console.log('捕获不到异常：', 'Uncaught ReferenceError');
}
```

2） window.onerror

window.onerror 可以捕获常规错误、异步错误，但不能捕获资源错误

```
/**
 * @param { string } message 错误信息
 * @param { string } source 发生错误的脚本URL
 * @param { number } lineno 发生错误的行号
 * @param { number } colno 发生错误的列号
 * @param { object } error Error对象
 */
window.onerror = function (message, source, lineno, colno, error) {
  console.log('捕获到的错误信息是：', message, source, lineno, colno, error);
};
```

示例：

```
window.onerror = function(message, source, lineno, colno, error) {
  console.log("捕获到的错误信息是：", message, source, lineno, colno, error);
};

// 示例1：常规运行时错误，可以捕获 ✅
console.log(notdefined);

// 示例2：语法错误，不能捕获 ❌
const notdefined;

// 示例3：异步错误，可以捕获 ✅
setTimeout(() => {
  console.log(notdefined);
}, 0);

// 示例4：资源错误，不能捕获 ❌
let script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://www.test.com/index.js";
document.body.appendChild(script);
```

3） window.addEventListener

当静态资源加载失败时，会触发 error 事件， 此时 window.onerror 不能捕获到

示例：

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<script>
  window.addEventListener('error', (error) => {
    console.log('捕获到异常：', error);
  }, true)
</script>

<!-- 图片、script、css加载错误，都能被捕获 ✅ -->
<img src="https://test.cn/×××.png">
<script src="https://test.cn/×××.js"></script>
<link href="https://test.cn/×××.css" rel="stylesheet" />

<script>
  // new Image错误，不能捕获 ❌
  // new Image运用的比较少，可以自己单独处理
  new Image().src = 'https://test.cn/×××.png'
</script>
</html>
```

4）Promise 错误

Promise 中抛出的错误，无法被 window.onerror、try/catch、 error 事件捕获到，可通过 unhandledrejection 事件来处理

示例：

```
try {
  new Promise((resolve, reject) => {
    JSON.parse('');
    resolve();
  });
} catch (err) {
  // try/catch 不能捕获Promise中错误 ❌
  console.error('in try catch', err);
}

// error事件 不能捕获Promise中错误 ❌
window.addEventListener(
  'error',
  (error) => {
    console.log('捕获到异常：', error);
  },
  true
);

// window.onerror 不能捕获Promise中错误 ❌
window.onerror = function (message, source, lineno, colno, error) {
  console.log('捕获到异常：', { message, source, lineno, colno, error });
};

// unhandledrejection 可以捕获Promise中的错误 ✅
window.addEventListener('unhandledrejection', function (e) {
  console.log('捕获到异常', e);
  // preventDefault阻止传播，不会在控制台打印
  e.preventDefault();
});
```

5）Vue错误

```js
Vue.config.errorHandler = (err, vm, info) => {
  console.log('进来啦~', err);
};
```

### 数据分析与存储

`将收集错误信息，存储服务端`

### 数据展示

`多端查看（大屏端、PC端、手机端），邮件Or短信通知`

[参考](https://www.webfunny.cn/wf_monitor/home.html)
