---
title: cropper 裁剪框不超出图片的写法！
author: 牛有德
date: 2018.09.15 17:37*
draft: false
comments: true
star: false
cover: ''
tags: 
  - js utils
abstract: 最近在做项目的时候，遇到了裁剪框不超出图片的需求，只能自己设法去完成了...
---

>最近在做项目的时候，遇到了裁剪框不超出图片的需求，只能自己设法去完成了。代码如下：
```
/**
   * 计算新位置的函数
   * @param {Object} scope  -- cropper对象
   */
  calData(scope){
    const cropBoxData = $(scope).cropper('getCropBoxData');
    const container = $('.cropper-container')[0].getBoundingClientRect();  // 容器
    const image = $('.cropper-canvas')[0].getBoundingClientRect(); // 图片
    const box = $('.cropper-crop-box')[0].getBoundingClientRect(); // 裁剪框
    const rightXLeft = image.left - container.left;
    const rightXRight = image.left - container.left + (image.width - box.width);
    const rightYTop = image.top - container.top;
    const rightYBottom = image.top - container.top + (image.height - box.height);
    let x = undefined;
    let y = undefined;
    let stop = false;
    if(box.left<image.left){  // 到了左边界
      x = rightXLeft;
      stop = true;
    } else if (box.right>image.right){  // 到了右边界
      x = rightXRight;
      stop = true;
    }

    if(box.top<image.top){  // 到了上边界
      y = rightYTop;
      stop = true;
    }else if(box.bottom>image.bottom){  // 到了下边界
      y = rightYBottom;
      stop = true;
    }

    return  {
    cropBoxData:{
      left:x||cropBoxData.left,
      top:y||cropBoxData.top,
      width:cropBoxData.width,
      height:cropBoxData.height
    },
    stop:stop
    }
  }

  handlerOver(scope){  // 溢出  裁剪框 超过图片大小时候的操作。
    const cropBoxData = $(scope).cropper('getCropBoxData'); 
    const image = $('.cropper-canvas')[0].getBoundingClientRect(); // 图片
    const box = $('.cropper-crop-box')[0].getBoundingClientRect(); // 裁剪框
    if(box.width>=image.width){
     // debugger
      $(scope).cropper('setCropBoxData',{
        left:cropBoxData.left,
        top:cropBoxData.top,
        width:image.width - 1,
        height: (image.width - 1) / 16 * 9
      } );
    }
  }

  cropper(){
    const _this = this;
     var cropper = this.$container.find(".realImg").cropper({
      aspectRatio: _this.options.aspectRatio,
      checkCrossOrigin: true,
      checkOrientation: false,
      cropmove:function(e){ // 只有这个才能阻止移动。。。
        let data = null;
        data = this.newData;
        const scope = this;
        if(data.stop){ // 停止移动
          e.preventDefault();
          $(scope).cropper('setCropBoxData', data.cropBoxData);
          !clearTime && (function(data){
            clearTime = setTimeout(()=>{
              data.stop = false;
              clearTime = undefined;
            },500)
          })(data)
        }
      },
      crop:function(e){ // 记录了位置
        this.newData = _this.calData(this);
      },
      cropend:function(e){ // 最终还原位置 做个判断
        const scope = this;
        const data = _this.calData(this);
        $(this).cropper('setCropBoxData', data.cropBoxData);
        _this.handlerOver(this);
        setTimeout(function(){
          const datafinal = _this.calData(this);
          $(scope).cropper('setCropBoxData', datafinal.cropBoxData);
        },300);
      },
      zoom: function (e) {
       // console.log(e);
        e.preventDefault();
      }
    });
  }
```