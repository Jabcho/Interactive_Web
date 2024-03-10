const link = document.querySelector("a");

link.addEventListener("click", (e) => {
    e.preventDefault();
    link.style.color = "aqua";
})