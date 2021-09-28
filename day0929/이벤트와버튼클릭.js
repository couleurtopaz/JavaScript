/*
이벤트와 이벤트 핸들링, 그리고 이벤트 핸들러
이벤트 : 웹 페이지에서 발생하는 대부분의 일(사건)들
  ex) 버튼 클릭, 스크롤, 키보드 입력, ...

이벤트 핸들링 : 자바스크립트를 통해 이벤트를 다루는 일

이벤트 핸들러 : 이벤트가 발생했을 때 일어나야하는 구체적인 동작들을 표현한 코드. 이벤트 리스너(Event Listener)라고도 부른다.
*/

// 1. 자바스크립트로 해당 DOM 객체의 onclick 프로퍼티에 등록하기
// 이벤트와 버튼 클릭
const btn = document.querySelector('#myBtn');

// 이벤트 핸들링
btn.onClick = function () { // 이벤트 핸들러
    console.log('Hello Hyewon')
}

// 2. HTML 태그의 onclick 속성에 바로 표시하기
// < button id = "myBtn" onClick = "console.log('Hello Codeit!')" > 클릭!</button>