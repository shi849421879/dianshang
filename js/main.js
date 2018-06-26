var ohioiede = document.querySelector('.div_hide')//选择器 H5  新增加的  

var show_o = document.querySelector(".mover_show")

show_o.onclick=function(){
    ohioiede.style.display = "block"
}

ohioiede.onmousemove = function(){
  
    ohioiede.style.display = "block"
}
ohioiede.onmouseout = function(){

    ohioiede.style.display = "none"
}
var dishoe = document.querySelectorAll(".float_div")
var listli = document.querySelectorAll(".list_img")
for(var i= 0;i<listli.length;i++){
        listli[i].index=i
        listli[i].onmousemove = function(){//for循环理由indexof的属性来进行轮播
     for(var i = 0;i<listli.length;i++){
        dishoe[i].style.display = "none"//先清空再添加
     }
        dishoe[this.index].style.display="block"//显示
     }
    listli[i].onmouseout = function(){
        dishoe[this.index].style.display = "none"//手指移除隐藏
     }
}
// 我要试装的图片变化tab  原理同上
var img_h = document.querySelectorAll(".list_ce_img li img")
var imglist = ["images/try4.jpg", "images/try5.jpg","images/try6.jpg" ]
var yuan = ['images/try1.jpg','images/try2.jpg','images/try3.jpg']
for(var i = 0;i<img_h.length;i++){
    img_h[i].index = i;
    img_h[i].onmousemove = function(){
        for(var i = 0;i<img_h.length;i++){
           
          img_h[i].src=yuan[i]//先清空再添加
        
      
    }
    img_h[this.index].src=imglist[this.index]//添加
    
}
}

// 判断轮动条的top值  让nav实时变化
var htmtop = document.querySelector(".nav_tap")
setInterval(function(){
  var s =   document.documentElement.scrollTop
  if(s>10){
      htmtop.style.top=0
      ohioiede.style.top = 88+"px"
  }else{
    htmtop.style.top=39+"px"
    ohioiede.style.top = 127+"px"
  }
},10)
   

// 这是 测评中心的 图片变化  css没有  打开是变化
// var shop_img =  document.querySelectorAll(".list_shop li img")
// console.log(shop_img)
// var img_shop = ["images/th1.png","images/th2.png","images/th3.png","images/th4.png","images/th5.png","images/th6.png","images/th7.png","images/th8.png",]
// var img_yuan = ["images/cp1.jpg","images/cp2.jpg","images/cp3.jpg","images/cp4.jpg","images/cp5.jpg","images/cp6.jpg","images/cp7.jpg","images/cp8.jpg.png",]

// for(var i = 0;i<shop_img.length;i++){
//     shop_img[i].index = i;
//     shop_img[i].onmousemove = function(){
//         for(var i = 0;i<shop_img.length;i++){
           
//             shop_img[i].src=img_yuan[i]
        
      
//     }
//     shop_img[this.index].src=img_shop[this.index]
    
// }
// }