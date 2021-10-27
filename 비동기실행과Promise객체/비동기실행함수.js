// 1. setTimeout 함수 : 특정 함수의 실행을 원하는 시간 만큼 뒤로 미루기 위해 사용하는 함수

console.log('a');
setTimeout(() => { console.log('b'); }, 2000); // () ⇒ { console.log('b'); }, 이 콜백의 실행을 2초 미룬다.
console.log('c');


// 2. setInterval 함수 : 특정 콜백을 일정한 시간 간격으로 실행하도록 등록하는 함수

console.log('a');
setInterval(() => { console.log('b'); }, 2000); // 콜백이 2초 간격으로 계속 실행
console.log('c');

// 3. addListener : 사용자가 웹 페이지에서 어떤 버튼 등을 클릭했을때, 실행하고 싶은 함수가 있다면 

// 1 ) 해당 DOM 객체의 onclick 속성에 그 함수를 설정하거나,
// 2 ) 해당 DOM 객체의 addEventListener  

