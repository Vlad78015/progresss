let boxColor = document.querySelector(".box")
window.addEventListener("scroll", function(){
    if(this.scrollY > 800){
        boxColor.classList.add("new")
    }
    else{
        boxColor.classList.remove("new")
    }
})