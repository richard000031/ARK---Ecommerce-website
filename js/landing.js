// 開頭動畫之js

var loader = document.getElementById('preloader');

window.addEventListener('load', function(){
document.querySelector("#header").style.display = "none"; //隱藏 header
setTimeout(function(){
loader.classList.add("fade-out");
document.querySelector("html").style.overflow = "auto";
document.querySelector("body").style.overflow = "auto";
loader.style.zIndex = "";
document.querySelector("#header").style.display = "flex"; //顯示 header
}, 2000);
})