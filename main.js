const cancel = document.querySelector(".cancel");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click",()=>{
    hamburger.style.display = 'none';
    cancel.style.display = 'inherit';
})

cancel.addEventListener("click",()=>{
    cancel.style.display = 'none';
    hamburger.style.display = 'inherit';
})