window.onclick = function(event){
    if (event.target == modalOpen) {
        modalOpen.style.display = "none";
    }
}

// Image modal
const openImage = document.querySelector(".shop");
const modalOpen = document.querySelector(".addWrapper");

openImage.addEventListener('click', () =>{
    modalOpen.style.display ="block";
});

// 
// const { func } = require("assert-plus");
// const { info } = require("winston");