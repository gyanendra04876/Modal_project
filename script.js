let button = document.querySelector(".open-btn");
let content = document.querySelector(".content");

button.addEventListener("click",function(){
    content.classList.toggle("content2");
});

let cancel = document.querySelector(".close-btn");

cancel.addEventListener("click",function(){
    content.classList.remove("content2");
});
