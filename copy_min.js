function rand_char(){return Math.random()<.5?String.fromCharCode(randomNum(65,90)):String.fromCharCode(randomNum(97,122))}function rand_str(n){for(var e="",r=0;r<n;r++)e+=rand_char();return e}function randomNum(n,e){switch(arguments.length){case 1:return parseInt(Math.random()*n+1,10);case 2:return parseInt(Math.random()*(e-n+1)+n,10);default:return 0}}var EasyCopy={create:function(n){var e=rand_str(100);return document.getElementById(n).innerHTML="<textarea id='"+e+"'></textarea>",document.getElementById(e).style.display="none",{id:e,div:n,copy:function(n){var e=document.getElementById(this.id);e.style.display="block",e.innerHTML=n,e.select(),document.execCommand("Copy"),e.innerHTML="",e.style.display="none"}}}};