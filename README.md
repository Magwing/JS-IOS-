# JS-IOS-
JS仿IOS弹窗
Demo: http://magwing.tpddns.cn:81/IOSUI
<body>
<p style="font-size:30px;color:#b5b5b5;text-align:center">
仿IOS 弹窗
<Br>
View:<br><a onclick="view('')">默认</a> <a onclick="view('choose')">选择</a>

<br>
<br>
食用方法：
<div style="font-size:20px;color:#b5b5b5;">
<br>
<h1>
一.配置
</h1>
1.引入JS:&lt;script src="js/jquery.js"&gt;&lt;/script&gt;&lt;script src="js/window.js"&gt;&lt;/script&gt;
<br>
2.设置弹窗后模糊和变暗的对象，用&lt;body&gt;嵌套起来
<br>
<h1>二.调用函数</h1>
1.函数名:win();<br>
参数:win(title,text,type);
type=null
默认窗口
type=choose
取消和确定的窗口<br>
<h1>三.回调</h1>
1.变量名:callback true为确定 fasle为取消<br>
2.关闭窗口时运行代码：请在程序开头设置变量名code的值<br>
<br>
</div>
</p>
</body>
</html>
