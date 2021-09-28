/*
주어진 코드를 실행했을 때 화면에 나타나는 채점이라고 적힌 button 태그를 클릭하면 정답입니다!👏🏻라는 경고창이 나타나도록 코드를 작성해 주세요.
*/

// 이벤트와 버튼 클릭
const btn = document.querySelector('#grade');

// 이벤트 핸들링
btn.onclick = function () { // 이벤트 핸들러
    alert('정답입니다!👏');
}
