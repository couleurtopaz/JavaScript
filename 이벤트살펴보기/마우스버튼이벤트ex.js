/*
마우스 왼쪽 버튼을 누른 순간 청기(flagBlue)에 'up'이라는 클래스 속성값이 추가되고, 마우스 오른쪽 버튼을 누른 순간 백기(flagWhite)에 'up'이라는 클래스 속성값이 추가되는 flagUp 함수를 완성해 주세요.
웹 페이지에서 contextmenu 이벤트가 발생하면 브라우저의 메뉴창이 나타나지 않도록 막아주세요.
*/


const flagBlue = document.querySelector('.flag-blue');
const flagWhite = document.querySelector('.flag-white');

function reset() {
    document.querySelector('.up').classList.remove('up');
}

function flagUp(e) {  
    if (e.button === 0) { // 마우스 왼쪽 버튼
        flagBlue.classList.add('up')
    } else { // 마우스 오른쪽 버튼 클릭시
        flagWhite.classList.add('up')
    }

    // 500 밀리초 뒤에 reset함수를 실행
    setTimeout(reset, 500);
}

document.addEventListener('contextmenu', function (event) {
    event.preventDefault(); // 브라우저의 기본 동작 막기
});

// 테스트 코드
document.addEventListener('mousedown', flagUp);