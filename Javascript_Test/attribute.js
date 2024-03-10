const link = document.querySelector("a");
let link_href = link.getAttribute("href");
console.log(link_href);


const new_href = "https://www.nate.com";
link.setAttribute("href", new_href);
link_href = link.getAttribute("href");
console.log(link_href);

const ver = navigator.userAgent;
console.log(ver);

// /와 / 사이에 탐색할 문자
// i : 알파벳 대소문자 구분 x
// test : 문자 탐색
const isIE = /trident/i.test(ver);
console.log(isIE);

if (isIE) {
    alert("익스플로러 지원 안함. 다른 브라우저로 접속해주세요.");
}