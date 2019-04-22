# 小程序开发技术汇总

>指导原则
>
>> 不使用转码方式进行小程序开发，只采用微信官方的js方式。
> 1. typescript方式在weapp下会编译成相同文件名的js文件，有干扰，不友好；没有必须使用ts的地方。
> 2. 其他诸如tano，minapp，mpvue，wepy等方式，都是经过了中间框架转码，为了兼容其他开发丢掉了微信原生的一些功能和灵活性。
> 3. h5开发中比较好用，但小程序官方暂未支持的几个弱项，现在都有成熟的解决方案，已无需中间框架来提供支持。
> 4. 小程序有大小限制，2m，所以一定要非常注意代码体积。
>
>> 针对官方开发工具所必要的一些补强：
> 1. 状态管理
> 2. 计算属性
> 3. 接口promise化

##  开发文档及组件

* [微信小程序官方网站](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)
* [微信小程序官方扩展](https://github.com/wechat-miniprogram)
* [awesome-weapp](https://github.com/justjavac/awesome-wechat-weapp)
* [微信小程序七日谈](http://www.cnblogs.com/ihardcoder/p/6097941.html)

## 技术选型

### 状态管理
* [westore](https://github.com/Tencent/westore)
* [westore进化版](https://github.com/Tencent/omi/tree/master/packages/omi-mp-create)
* [mobx-3.x](https://github.com/80percent/wechat-weapp-mobx)

### 计算属性
* [computed](https://github.com/wechat-miniprogram/computed)
* omi 的工具库已经在去中心化的data方法中支持函数属性

### 异步请求
* [promise](https://github.com/youngjuning/wxPromise)
* [weRequest](https://github.com/IvinWu/weRequest)
* [miniprogram-network](https://github.com/NewFuture/miniprogram-network)

### 组件库
* [vant-weapp](https://youzan.github.io/vant-weapp/#/intro)
* [wuss-weapp](https://phonycode.github.io/wuss-weapp/)
* [lin-ui](http://doc.mini.7yue.pro/)
* [wx_calendar](https://github.com/treadpit/wx_calendar)


### 新组建需求
* form 表单的input、cell等增加下拉弹窗组件

* 微信下数组修改写法：    this.setData({
      ['oldList[' + index + '].' + field + '']: e.detail.value
    }) 调研store中的动态数组写法
* 调研在小程序中打开公众号页面的用法。
