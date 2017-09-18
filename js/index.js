var a=document.getElementById("guanggao");
var btn=document.getElementById("shanchu");
btn.onclick=function(){
	a.style.display="none";
}
var song=document.getElementById("song");
var city=document.getElementById("city");
song.onmouseenter=function(){
	city.className="cityshow";
}
song.onmouseleave=function(){
	city.className="citynone";
}