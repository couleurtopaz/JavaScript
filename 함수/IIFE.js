// 즉시 실행 함수 (IIFE): 함수 선언과 동시에 즉시 실행되는 함수

(function () {
    console.log('Hi');
})();



(function (x, y) {
    consoel.log(x + y);
})(3, 5);




(function sayHi() {
    console.log('Hi!');
})();

sayHi(); // ReferenceError
// 즉시 실행 함수는 함수에 이름을 지어주더라도 외부에서 재사용 할 수 없다.


(function init() {
    // 프로그램이 실행 될 때 기본적으로 동작할 코드들..
})();
// 즉시 실행함수는 말 그대로 선언과 동시에 실행이 이뤄지므로 이란적으로 프로그램 초기화 긴으에 많이 활용



// 재사용이 필요 없는, 일회성 동작을 구성할 때 활용
const firstName = Young;
const lastName = Kang;

const greetingMessage = (function () {
    const fullName = `${firstName} ${lastName} `;

    return `Hi! My name is ${fullName}`;
})();
// 함수의 리턴값을 바로 변수에 할당하고 싶을때.