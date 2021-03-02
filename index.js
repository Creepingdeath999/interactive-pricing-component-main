const switchCircle=document.getElementById('circle');
let pageValue=document.getElementById('pageValue');
let priceValue=document.getElementById('priceValue');
let slider=document.getElementById('myRange');

slider.oninput = function() {
    priceValue.innerHTML = this.value+"/";
    pageValue.innerHTML=(this.value*10000)/1000+"K";
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, hsl(174, 86%, 45%) 0%, hsl(174, 86%, 45%) ' + value + '%, #ccc ' + value + '%, #ccc 100%)'

  }
priceValue.innerHTML=slider.value+'/';
pageValue.innerHTML=(slider.value*10000)/1000+'K';
//switch between monthly and early
switchCircle.parentElement.addEventListener('click', ()=>{
    switchCircle.classList.toggle('yearly');
})
