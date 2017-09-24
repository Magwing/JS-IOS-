//WIndow.js by MAGWING in 2017
/*Powered by Magwing.lnc*/

//Settings
titles = {
	font_size : 16,
};

//计算
p_size=titles.font_size-2;

//function
var win = function(title,head,type){
    width=screen.availWidth;
	height=screen.availHeight;
	left=width/2-134;
	top_hei=height/2-100;
	windows = {
		wid: 270,
	}
    tools = {
		top:top_hei-90,
		left:left+290,
	}
	tools_ground = {
		top:top_hei+90,
		left:left,
	}
	$(document).ready(function(){
	$("html").attr("onmousewheel","return false;");
	$("html").append("<window></window>");
	$("body").fadeTo(0.1,0.05);
	$("window").html('<style>::-moz-selection { /* Code for Firefox */background: transparent;}::selection {background: transparent;}body{background-color:#e8e8e8;color:#e8e8e8;}#window{cursor:default;word-wrap:break-word;color:#000;position:fixed;left:'+left+'px;top:'+top_hei+'px;width:'+windows.wid+'px;background-color: #f2f2f2;border-bottom: 1px solid #b5b5b5;    border-top-left-radius: 7px;border-top-right-radius: 7px;text-align:center;border-radius: 15px 15px 0px 0px;}#tools_ground{line-height:250%;word-wrap:break-word;margin-top: 1px;text-align: center;color: #007aff;background: #f2f2f2;display: block;position: relative;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor: pointer;border-bottom: 1px solid #b5b5b5;box-sizing: border-box;position:fixed;left:'+tools_ground.left+'px;width:'+windows.wid+'px;border-radius: 0px 0px 15px 15px;}</style><!--main--><div id="window"><div style="font-size:'+titles.font_size+'px"><br><B>'+title+'</B></div><p style="font-size:'+p_size+'px">'+head+'</p><tools id="tools_ground"><tools style="font-size:'+titles.font_size+'px;"><close onclick="clos(true);"><b>确定</b></close></tools></tools></div>');
    $("#window").fadeOut(0);
	$("#window").fadeIn(500);
    $("tools").hover(function(){
	$("tools").attr("style","background:#e8e8e8;");
	},
    function(){
      $("tools").attr("style","background:#f2f2f2;");
  });
	});
}
var js = function(code){
	eval(code);
}
var clos = function(type){
	$("html").attr("onmousewheel","");
	$("#window").fadeOut(500);
	$("window").html("");
	$("body").fadeTo(0.1,1);
    callback=type;
	if(code!=false){
	js(code);
	}
	code=false;
	return type;
}
