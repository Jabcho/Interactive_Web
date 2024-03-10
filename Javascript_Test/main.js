const btnleft = document.querySelector(".btnleft");
const btnright = document.querySelector(".btnright");
const box = document.querySelector("#box");

const deg = 45;
let num = 0;

btnleft.addEventListener("click", e => {
    e.preventDefault();
    num--;
    box.style.transform = `rotate(${num*deg}deg)`;
})

btnright.addEventListener('click', e => {
    e.preventDefault();
    num++;
    box.style.transform = `rotate(${num*deg}deg)`;
})