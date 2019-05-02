window.onload= function () {
    document.getElementById("p1").onclick=function () {
        document.getElementById("bigPicture").src="images/medium/5855774224.jpg";
        document.getElementById("mouseEle").innerHTML=document.getElementById("p1").title;
    }
    document.getElementById("p2").onclick=function () {
        document.getElementById("bigPicture").src="images/medium/5856697109.jpg";
        document.getElementById("mouseEle").innerHTML=document.getElementById("p2").title;
    }
    document.getElementById("p3").onclick=function () {
        document.getElementById("bigPicture").src="images/medium/6119130918.jpg";
        document.getElementById("mouseEle").innerHTML=document.getElementById("p3").title;
    }
    document.getElementById("p4").onclick=function () {
        document.getElementById("bigPicture").src="images/medium/8711645510.jpg";
        document.getElementById("mouseEle").innerHTML=document.getElementById("p4").title;
    }
    document.getElementById("p5").onclick=function () {
        document.getElementById("bigPicture").src="images/medium/9504449928.jpg";
        document.getElementById("mouseEle").innerHTML=document.getElementById("p5").title;
    }
    document.getElementById("featured").onmouseenter= function () {
        document.getElementById("mouseEle").style.opacity=0.8;
        document.getElementById("mouseEle").style.webkitTransitionDuration="1s";
    }
    document.getElementById("featured").onmouseleave= function () {
        document.getElementById("mouseEle").style.opacity=0;
        document.getElementById("mouseEle").style.webkitTransitionDuration="1s";
    }
}