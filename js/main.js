let span = document.querySelector(".to-up");

window.onscroll = function (){
    console.log(this.scrollY);
    this.scrollY > 3000 ? span.classList.add("show") : span.classList.remove("show");
} 

span.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})