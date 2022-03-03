const observer=new IntersectionObserver (entries =>{
entries.forEach(entry => {
if(entry.isIntersecting){
document.queryselectorAll(".animated")[0].classList.add("fadeInRight");
document.queryselectorAll(".animated")[1].classList.add("fadeInLeft");
document.queryselectorAll(".animated")[2].classList.add("fadeInLeft2");
document.queryselectorAll(".animated")[3].classList.add("fadeInLeft3");


}

})

})

observer.observe(document.queryselector(".container"));
