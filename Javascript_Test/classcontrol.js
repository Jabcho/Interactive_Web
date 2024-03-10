const wrap = document.querySelector("#wrap");
const box = wrap.querySelector("article");

//자바스크립트로 변경한 CSS가 태그에 스타일 속성이 직접 삽입
// ==> 태그에 인라인 형태로 삽입된 스타일 구문은 우선순위가 높아서 기존 CSS 스타일 우선순위에 변경을 줄 수 있음
// wrap.addEventListener("mouseover", () => {
//     box.style.background = "hotpink";
// })
// wrap.addEventListener("mouseleave", () => {
//     box.style.background = "aqua";
// })

// 요소의 스타일 속성값을 직접 변경하지 않고 클래스명 추가해서 배경색 제어 (classList)
wrap.addEventListener("click", () => {
    let isOn = wrap.classList.contains("on");

    // isOn ? wrap.classList.remove("on") : wrap.classList.add("on")

    wrap.classList.toggle("on");
})