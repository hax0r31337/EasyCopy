# 中文文档(Simplified Chinese)
## 介绍
这是一个方便而且轻量的js复制器，能够帮助你一键复制内容，让web开发更加方便
## 使用
使用CDN
~~~
<script src="https://cdn.jsdelivr.net/gh/liulihaocai/EasyCopy/copy.min.js"></script>
~~~
直接使用
~~~
<script src="./js/copy.js"></script>
~~~
## 创建
html
~~~
<div id="test"></div>
~~~
js
~~~
var goingcopy=EasyCopy.create("test")
~~~
原理：创建隐藏textarea在调用copy时进行复制
## 复制
需要先创建后才可复制
~~~
goingcopy.copy("This is things ready for copy.")
~~~
非常方便，无任何细节
## 示例
~~~
	<button onclick="copynow()">Copy</button>
	<div id="test"></div>
	<script type="text/javascript">
		var copyt=EasyCopy.create("test")
		function copynow(){
			copyt.copy("This is things ready for copy.")
		}
	</script>
~~~
及其方便，仅2行代码即可复制
完整示例html文件放在了./example/1.html中