// 브라우저의 기본 동작
const link = document.querySelector('#link');
const checkbox = document.querySelector('#checkbox');
const input = document.querySelector('#input');
const input = document.querySelector('#text');

// event.preventDefault : 브라우저의 기본 동작을 막는다
link.addEventListener('click', function (e) {
    e.preventDefault()
    alert('지금은 이동할 수 없습니다.');
});

input.addEventListener('keydown', function (e) {
    if (!checkbox.checked) {
        e.preventDefault();
        alert('체크박스를 먼저 클릭해주세요');
    }
});

Text.addEventListener('contextmenu', function (e) {
    e.preventDefault()
    alert('마우스 오른쪽 버튼은 클릭할수없습니다.');
});
