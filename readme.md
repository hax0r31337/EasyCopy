[![](https://data.jsdelivr.com/v1/package/gh/liulihaocai/EasyCopy/badge)](https://www.jsdelivr.com/package/gh/liulihaocai/EasyCopy)
# 中文文档(Simplified Chinese)
## 介绍
这是一个方便而且轻量的js复制器，能够帮助你一键复制内容，让web开发更加方便
大小仅0.7kb(没有gzip)
## 自动使用
将你的body设置id
~~~
<body id="cr">
~~~
js
~~~
var copyt=EasyCopy.autocreate("cr")
EasyCopy.autocreate(inid[,addf=false,divl=100,rand_l=100])
~~~
就可以自动创建啦，然后即可复制
## 直接使用
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
或者
~~~
var goingcopy=EasyCopy.create("test",1000)
~~~
1000是随机textarea_id的长度(无特殊需要不建议更改，默认100)
原理：创建隐藏textarea在调用copy时进行复制
## 复制
需要先创建后才可复制
~~~
goingcopy.copy("This is things ready for copy.")
~~~
非常方便，无任何细节
## 示例
### 1.html
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

### 2.html
~~~
<button onclick="copynow()">Copy</button>
<script type="text/javascript">
	var copyt=EasyCopy.autocreate("cr")
	function copynow(){
	copyt.copy("This is things ready for copy.")}
</script>
~~~
完整示例html文件放在了./example/.html中
# English(US)
## Get Started
load form JSDelivr CDN
~~~
<script src="https://cdn.jsdelivr.net/gh/liulihaocai/EasyCopy/copy.min.js"></script>
~~~
use directly
~~~
<script src="./js/copy.js"></script>
~~~
## Auto Create
set body id
~~~
<body id="cr">
~~~
js
~~~
var copyt=EasyCopy.autocreate("cr")
EasyCopy.autocreate(inid[,addf=false,divl=100,rand_l=100])
~~~
It ll autocreate,then you can copy
## Create
html
~~~
<div id="test"></div>
~~~
js
~~~
var goingcopy=EasyCopy.create("test")
~~~
or
~~~
var goingcopy=EasyCopy.create("test",1000)
~~~
1000 is length of the random textarea_id(Not recommended to modify，default 100)
Create an invisable textarea used to copies text to clipboard
## Copy text to Clipboard
Copy need to create first
~~~
goingcopy.copy("This is things ready for copy.")
~~~
very convenient, without any details.
## Example
### 1.html
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
Only 2 lines of the code!
### 2.html
~~~
<button onclick="copynow()">Copy</button>
<script type="text/javascript">
	var copyt=EasyCopy.autocreate("cr")
	function copynow(){
	copyt.copy("This is things ready for copy.")}
</script>
~~~
Full example html file is on ./example/.html
