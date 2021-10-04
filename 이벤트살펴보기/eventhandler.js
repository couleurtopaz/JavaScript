// 이벤트 핸들러 등록하기
let btn = document.querySelector('#myBtn');

function event1() {
    console.log('Hi Hyewon !');
}

function event2() {
    console.log('Hi again !');
}

// elem.addEventListener(event, handler) : 이벤트 핸들러를 등록
// addEventListener 메소를를 활용하면 다양한 타입으로 원하는 만큼 이벤트 핸들러를 자유롭게 등록할 수 있어서 onclick 프로퍼티와는 다르게 이벤트 핸들러를 등록한 만큼 동작

btn.addEventListener('click', event1);
btn.addEventListener('click', event2);

// elem.removeEventListener(event, handler)
btn.removeEventListener('click', event2);

/*

다양한 이벤트

1. 마우스 이벤트 
    - mousedown : 마우스 버튼을 누르는 순간
    - mouseup : 마우스 버튼을 눌렀다 떼는 순간
    - click : 왼쪽 버튼을 클릭한 순간
    - dblclick : 더블 클릭한 순간
    - contextmenu : 오른쪽 버튼을 클릭한 순간
    - mousemove : 마우스를 움직인 순간
    - mouseover : 마우스 포인터가 요소 위로 올라온 순간
    - mouseout : 마우스 포인터가 요소에서 벗어난 순간

2. 키보드 이벤트
    - keydown : 키보드의 버튼을 누르는 순간
    - keypress : 키보드의 버튼을 누르는 순간
    - keyup : 키보드의 버튼을 눌렀다 떼는 순간

3. 포커스 이벤트
    - focusin : 요소에 포커스가 되는 순간
    - focusout : 요소로부터 포커스가 빠져나가는 순간
    - focus : 요소에 포커스가 되는 순간
    - blur : 요소로부터 포커스가 빠져 나가는 순간

4. 입력 이벤트 
    - change : 입력값이 바뀌는 순간
    - input : 값이 입력되는 순간
    - select : 입력 양식의 하나가 선택되는 순간
    - submit : 폼을 전송하는 순간

5. 스크롤 이벤트 
    - scroll : 스크롤 바가 움직일 때

6. 윈도우 창 이벤트
    - resize : 윈도우 사이즈를 움직일 떼

*/