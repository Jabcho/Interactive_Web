const frame = "section";
const box = "article";
const speed = '0.5s';
const activeClass = "on";
const btns = document.querySelectorAll("main ul li");
let grid; // 플로그인의 정봇값이 담길 변수를 이곳에 전역으로 설정


window.addEventListener("load", ()=> {
    init();
    filter(btns);
});


// 화면 초기화 함수 정의
function init() {
    // isotope 이용한 페이지 로드 이벤트
    // isotope 플러그인은 이미지까지 모두 포함한 각 article 요소의 높잇값을 인식한 후 레이아웃 배치가 가능하므로, 모든 로딩 완료될 때까지 기다렸다가 플러그인 기능 호출
    grid = new Isotope(frame, {
        itemSelector: box,
        columnWidth: box,
        transitionDuration: speed
    });
}

// 정렬 버튼 기능 함수 정의
function filter(arr) {
    for (let el of arr) {
        el.addEventListener("click", e => {
            e.preventDefault();

            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            grid.arrange({
                filter: sort
            });

            for (let el of arr) {
                el.classList.remove(activeClass);
            }

            e.currentTarget.classList.add(activeClass);
        })
    }


}