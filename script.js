var menuy = document.getElementById('menuy');
var  overlay  = document.getElementById('box');
menuy.addEventListener('click',function(){
    this.classList.toggle("close")
    overlay.classList.toggle("overlay")
})
