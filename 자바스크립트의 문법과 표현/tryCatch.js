console.log('시작! ');

const error = new TypeError('타입 에러가 발생했습니다.');

console.log(error.name);
console.log(error.message);

console.log('끝');

/* 
try catch 문

자바스크립트에서 에러가 발생하면, 그 순간 프로그램 자체가 멈추고 그 이후의 코드는 더이상 동작 하지 않는다.
에러가 발생하면 자동으로 에러의 내용이 담긴 에러 객체가 만들어짐

try catch 문을 활용하면 -> 에러가 발생해도 프로그램을 멈추지 않고,
에러가 발생했을 때 동작할 코드를 다룰 수 있게 된다.
에러 객체는 기본적으로 에러 이름을 담고있는 name 프로퍼티와 에러 내용을 담고있는 message 프로퍼티

throw : 강제로 에러를 발생시키는 키워드
throw new Error('에러가 발생했습니다');
*/

try {
    // 코드
} catch (error) {
    // 에러가 발생했을 때 동작할 코드
}

try {
    console.log('에러 전');

    const hyewon = '헤원';
    console.log(hyewon);

    hyewon = 'hyewon';
    
    const language = 'JS';
    console.log(language);
} catch (e) {
    console.log('에러 후');
    console.error(e);
    console.log(e.name);
    console.log(e.message);
}