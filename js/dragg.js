/**
 * Created by ASUS-PC on 2017-09-05.
 * Author:曾相荧
 * Email:948691254@qq.com
 */
    'use strict';
    // 获取节点
    var block = document.getElementById("MoveMatches");
    var oW,oH;
    // 绑定touchstart事件
    block.addEventListener("touchstart", function(e) {
        //console.log(e);
        var touches = e.touches[0];
        oW = touches.clientX - block.offsetLeft;
        oH = touches.clientY - block.offsetTop;
        //阻止页面的滑动默认事件
        document.addEventListener("touchmove",defaultEvent,false);
    },false)

    var RubMatches = document.getElementById("RubMatches");
    block.addEventListener("touchmove", function(e) {
    var touches = e.touches[0];
    var oLeft = touches.clientX - oW;
    var oTop = touches.clientY - oH;

    //屏幕的长度和高度
    var wLeft = document.documentElement.clientWidth;
    var wTop = document.documentElement.clientWidth;

    if(oLeft < 0) {
        oLeft = 0;
    }else if(oLeft > wLeft - block.offsetWidth) {
        oLeft = ( wTop - block.offsetWidth);
    }
    block.style.left = oLeft + "px";
    block.style.top = oTop + "px";
    //擦火柴时的效果
    if((wLeft/oLeft) < 3.19 && (wLeft/oLeft) > 2.4){
        if((wTop/oTop) < 3.75 && (wTop/oTop) > 2.11){

            var fire = document.getElementById("fire");
            var Matchbox = document.getElementById("Matchbox");
            //文字更换
            var context = document.getElementById("context");
            var content = document.getElementById("content");

            fire.style.display = "block";
            setTimeout(function () {
                //火柴盒消失
                Matchbox.style.display = "none";
                //文字的更替
                context.style.display = "none";
            },600);
            setTimeout(function () {
                //背景图更换
                RubMatches.style.background = "url('images/cake.jpg') no-repeat";
                RubMatches.style.backgroundSize = "100%";
                RubMatches.style.animation = "cakeShow 1.5s";
                //文字的更换
                content.style.display = "block";

                //火光的焦点
                var focusOne = document.getElementById("focusOne");
                var focusTwo = document.getElementById("focusTwo");
                //焦点显示
                focusOne.style.display = "block";
                focusTwo.style.display = "block";
            },1000);

        }
    }

    //点燃蛋糕蜡烛时
    CakeFire();

    function CakeFire(){

        var fLeft = focusOne.offsetLeft;
        var fTop = focusTwo.offsetTop;

        //火光
        var CakefireOne = document.getElementById("CakefireOne");
        var CakefireTwo = document.getElementById("CakefireTwo");
        //点燃第一根蜡烛
        if((wLeft/oLeft) < 2.6 && (wLeft/oLeft) > 2.4){
            if((wTop/oTop) < 1.18 && (wTop/oTop) > 1.13){
                CakefireOne.style.display = "block";
                CakefireOne.setAttribute("title","1");
            }
        }
        //点燃第二根蜡烛
        if((wLeft/oLeft) < 2.0 && (wLeft/oLeft) > 1.875){
            if((wTop/oTop) < 1.10 && (wTop/oTop) > 1.03){
                CakefireTwo.style.display = "block";
                CakefireTwo.setAttribute("title","1");
            }
        }
        //判断两根蜡烛是否被点燃
        if(CakefireOne.getAttribute("title") == "1" && CakefireTwo.getAttribute("title") == "1"){
            var u = navigator.userAgent;
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            if(isiOS){
                
                var  is_playFinish = setInterval(function(){
                   
                    RubMatches.style.display = "none";
                    self.location = "BirthdayCake.html";
                    
                }, 100);
                
            }else{
                PlayMusic();
            }s
            
        }

    }
    //音乐响起

        function PlayMusic(){
            var Music01 = document.getElementById("Music01");
            Music01.play();
            //如果音乐暂停则关闭页面
            if(Music01.play){
                var  is_playFinish = setInterval(function(){
                    if(Music01.ended){
                        RubMatches.style.display = "none";
                        self.location = "BirthdayCake.html";
                    }
                }, 10);
            }
        }

},false);




    block.addEventListener("touchend",function() {

        document.removeEventListener("touchmove",defaultEvent,false);

    },false);

    function defaultEvent(e) {
        e.preventDefault();
    }

