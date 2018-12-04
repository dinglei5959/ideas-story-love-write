---
title: css经典布局
author: 牛有德
date: 2018.09.11 17:37*
draft: false
comments: true
star: false
cover: ''
tags: 
  - css
---


#布局类型
- 浮动布局
- 流式布局
- 定位布局
- flex布局
- grid布局
#布局详解
##1.浮动布局。
>浮动布局是利用float的特性，进行的布局。我进行过的学习有：
### 1）. float + margin 的两栏布局。
```
<!DOCTYPE html>

<head>
  <title>width_layout</title>
  <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
  <style type="text/css">
    .content {
      min-width: 300px;
    }

    .div1 {
      width: 200px;
      height: 300px;
      background: green;
      float: left;
    }

    .div2 {
      height: 300px;
      background: pink;
      margin-left: 200px;
    }
  </style>
</head>

<body>

  <div class="content">
    <div class="div1"></div>
    <div class="div2"></div>
  </div>

</body>

</html>
```
没啥好说的，本来就很简单，看到这里三栏自然而然就出来了:
### 2）fload + margin 三栏布局
```
<!DOCTYPE html>

<head>
  <title>layout2</title>
  <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .main {
      height: 300px;
      width: 100%;
      min-width: 400px;
    }

    .main_left {
      height: 300px;
      width: 200px;
      float: left;
      background-color: green;
      text-align: center;
    }

    .main_center {
      height: 300px;
      margin-left: 200px;
      margin-right: 100px;
      text-align: center;
      background-color: pink;
    }

    .main_right {
      height: 300px;
      width: 100px;
      float: right;
      text-align: center;
      background-color: blue;
    }
    .left{
      height: 300px;
      margin-left: 200px;
      margin-right: 100px;
      text-align: center;
      background-color: red;
      float: left;
    }
  </style>
</head>

<body>
  <!-- <div class="main"> -->
    <div class="main_right">我是右边部分，宽度不变</div>
    <div class="main_left">我是左边部分，宽度不变</div>
    <!-- <div class="main_center">我是中间部分，宽度自适应</div> -->
    <div class="main_center">我是中间部分，宽度自适应</div>
  <!-- </div> -->
</body>

</html>
```
这里对float布局做个分析吧，对于float设计的出发点就是环绕，因此它对于普通的盒子，会产生环绕效果，上文的代码中，就是环绕在center中，这里稍微需要注意的是，center需要放在最后面，否则会换行，这是因为float只会围绕他后面的非float元素。
还有一点就是这种布局有一种缺点就是需要知道左右两栏的宽度，center才能做出适配，下面给出优化方案：
### 3) float + margin + BFC 三栏
```
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style>
      .center,.left,.right{
        height: 100px;
      }
      .center{
        display: table-cell;
        width: 9000px;
        background: red;
        *display: inline-block;
      *width: auto;
      }
      .left{
        float: left;
        width: 200px;
        background: green;
      }
      .right{
        float: right;
        width: 200px;
        background: blue;
      }
    </style>
  </head>
  <body>
    <div class="left">left</div>
    <div class="right">right</div>
    <div class="center">center</div>
  </body>
</html>

```
写法差距不大，只是center触发BFC，利用了BFC的区域不会与float box重叠的效果来完成三栏。顺便提下BFC吧。6大规则：
（1）盒子按照垂直方向一个一个的放置。
 （2）盒子的垂直方向的间距是根据margin来决定的（可以解决子盒子的margin带给了父的问题），相邻的盒子margin会发生重叠。
（3）子盒子会跟父盒子的左边想接触。
（4）BFC区域不会和float box发生重叠（本布局就是利用了这一点）
 （5）作为一个隔离的独立容器，容器的子元素不会影响外面的布局。（核心点）
 （6）计算宽高时，浮动元素也参与计算。
##2.流式布局
>作为最普通的布局，将body作为滚动体，那么在移动端的webview可以利用其自身的滚动效果来达到一个高度适应的效果，最经典的h5布局，目前许多网站都是用的这个布局（微博、淘宝）
这里放个demo:
```
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <style>
      .header{
        position: fixed;
        height: 44px;
        top: 0;
        background: red;
        left: 0;
        right: 0;
        text-align: center;
      }

      .body{
        padding: 44px 0;
       height:2000px;
      }

      .footer{
        position: fixed;
        height: 44px;
        bottom: 0;
        background: brown;
        left: 0;
        right: 0;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="header">头部</div>
    <div class="footer">底部</div>
    <div class="body">
      <div>哦哦哦哦哦哦</div>
      <div>哦哦哦哦哦哦</div>
    </div>
  </body>
</html>
```
值得注意的是，很多同学都喜欢在mobile里面，使用-webkit-overflow-scrolling：touch做全局属性，那么在使用流式布局的时候，切记把body和html给去掉，否则会导致body使用webview自带的弹性效果（虽然效果一样），重要的是fixed在滚动到底部的时候会遮住footer。
## 3.定位布局。
>定位布局，其实就是利用position去做布局。有时候，你希望你某个盒子可以根据父元素自动撑开，又不想去计算父元素的高度，那么可以将父元素设置为relative。而子元素设置为absolute，且top,right,left,bottom都为0。那么子元素就会完全将父元素遮住。典型的一个应用就是移动端的一个经典布局，这里给出demo。
```
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <style>

      .container{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        overflow: hidden;
      }

      .header{
        position: absolute;
        height: 44px;
        top: 0;
        background: red;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 2;
      }

      .body{
        padding: 44px 0;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: bisque;
        z-index: 1;
      }
      .content{
        height: 2000px;
      }

      .footer{
        position: absolute;
        height: 44px;
        bottom: 0;
        background: brown;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 2;
      }
    </style>
  </head>
  <body>
    <div class="container">
        <div class="header">头部</div>
        <div class="footer">底部</div>
        <div class="body">
          <div class="content">哦哦哦哦哦哦</div>
        </div>
    </div>
  </body>
</html>
```
值得注意的是，这种布局，在滚动到底部或头部的时候，整个webview都会跟着滚动，算是一个不完美的地方，但是喜欢转场动画的童鞋们，注意了，这种布局在做转场动画堪称完美！！！
## 4.flex布局
>flex布局是浏览器支持性较好的功能最为强大的布局。
###（1）首先介绍设置在容器的五大属性
- flex-direction
设置主轴的方向，一共有flex-direction: row | row-reverse | column | column-reverse; 四个值。
- flex-wrap
是否换行，这个也决定这align-items和align-content 谁起作用。一共三个值 nowrap|wrap|wrap-reverse
- justify-content
主轴方向上项目的对齐方式， flex-start|flex-end|space-between|space-around | center 一共五个属性
- align-items
flex-wrap 为 no-wrap的时候，起作用的垂直对齐方式的设置
一共五个属性分别为 flex-start|flex-end|center|stretch|baseline
需要注意的是 stretch和baseline  一个是撑开另一个是基于文字对齐。
- align-content
flex-wrap为 wrap 或者  wrap-reverse 属性和 align-item的属性一样，这里不做赘述。
###（2）设置在item的属性值为：
- order
- flex-grow
- flex-shrink
- flex-basis
- align-self
为了做好的兼容性，建议搭建工程的童鞋使用autoprefixer，flex兼容性不够好，但是box兼容性还是比较好的，然而box和flex因为一些策略不同，导致使用一些特殊属性的时候会出现一些奇怪的问题。
`
需要注意的是flex 是 flex-grow flex-shrink flex-basis的合写。默认值是 0 1 auto。我们在使用flex-basis的时候，如果只是为了设置宽度，那么切记使用overflow:hidden给盒子加上，不然当某个盒子的元素超过basis那么其他盒子就会变形。
`
##5. grid布局
>grid的网格布局，目前还没有在浏览器中推广，因此应用还不广泛。目前有以下属性。
- grid-template-columns
- grid-template-rows
- grid-template-areas
- grid-column-gap
- grid-row-gap
- grid-gap
- justify-items
- align-items
- justify-content
- align-content
- grid-auto-columns
- grid-auto-rows
- grid-auto-flow
- grid
`
grid-template-columns 和 grid-template-rows是配合定义网格行列大小及数目的。
值得注意的是grid-area 和  grid-template-areas的配合，前者是定义给item的名字，后者是进行具体分配，增加其灵活。
`
```
<html>
  <head></head>

  <style>
    
    .item-a{
      grid-area: header;
      background:red;
    }
    .item-b{
      grid-area: main;
      background:blue;
    }
    .item-c{
      grid-area: sidebar;
      background:gold;
    }
    .item-d{
      grid-area: footer;
      background: green;
    }
    .container{
        display:grid;
        grid-template-columns: 50px 50px 50px 50px;
        grid-template-rows: auto;
        grid-template-areas: "header header header header"
                            "main main . sidebar"
                            "footer footer footer footer"
    }
  </style>
  <body>
    <div class="container">
      <div class="item-a">header</div>
      <div class="item-b">main</div>
      <div class="item-c">sidebar</div>
      <div class="item-d">footer</div>
    </div>
  </body>
</html>
```
 justify-items   start | end | center | stretch ;  一旦设置这个值，area设置的值和  grid-colums-start  和grid-colums-end设置的值可能会失效。宽度会变成1.
![设置了 justify-items:left后的样式](https://upload-images.jianshu.io/upload_images/4655104-cef7d3c54143f7e6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
align-items  start | end | center | stretch  垂直方向的。和 justify-items同理。
`
值得注意的是前面两种属性是针对item本身的，内容本身占据的位置。
`
align-content: start | end | center | stretch | space-around | space-between | space-evenly ; 
`
这个属性面向的是容器本身。下面粘贴所有的情况。
`
![center](https://upload-images.jianshu.io/upload_images/4655104-97a82e19d47c4f27.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![baseline](https://upload-images.jianshu.io/upload_images/4655104-b6fad1e5ccebdf42.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![end](https://upload-images.jianshu.io/upload_images/4655104-db2f9b23dd086819.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![start](https://upload-images.jianshu.io/upload_images/4655104-589738588dc7e307.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![space-around](https://upload-images.jianshu.io/upload_images/4655104-a2781f3d1efca59a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![space-between](https://upload-images.jianshu.io/upload_images/4655104-f5ee03fbf9b9e041.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![space-evenly](https://upload-images.jianshu.io/upload_images/4655104-bf7d1c924f25336a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
`space-around和space-evenly的区别是区间是否平分。`

stretch目前我测试过在chrome和firefox里面并没有作用。就这样啦，待会补充常用的布局方式。


