function rand_char() {
	if (Math.random()<0.5) {return String.fromCharCode(randomNum(65,90));}
	else{return String.fromCharCode(randomNum(97,122));}
}
function rand_str(len) {
	var rstr="";
	for (var i=0;i<len;i++) {
		rstr+=rand_char();
	}
	return rstr;
}
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}
var EasyCopy={
create:function (divid,rand_l=100){
var uid=rand_str(rand_l),div=document.getElementById(divid);
div.innerHTML="<textarea id='"+uid+"'></textarea>";
document.getElementById(uid).style.display="none"
return {id:uid,div:divid,copy:function (file){
var Url2=document.getElementById(this.id);
Url2.style.display="block";
Url2.innerHTML=file
Url2.select();
document.execCommand("Copy");
Url2.innerHTML="";
Url2.style.display="none"
}}
}
}