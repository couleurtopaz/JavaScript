/*
기명 함수 표현식 : 함수 표현식으로 함수를 만들때는 선언하는 함수에 이름을 붙여줄 수 있다
*/


// 이름이 없는 함수를 변수에 할당할 때는, 변수의 name 프로퍼티는 변수 이름 그 자체를 문자열로 가진다.
const sayHi = function () {
    console.log('Hi');
};

console.log(sayHi.name); // sayHi





const sayHi = function printHiInConsole() {
    console.log('Hi');
};

console.log(sayHi.name); // printHiInConsole





// 함수 내부에서 함수 자체를 가리킬 때 사용가능하고, 함수를 외부에서 호출할 때 사용할 수 없다.
const sayHi = function printHiInConsole() {
    console.log('Hi');
};

printHiInConsole(); // ReferenceError




let countdown = function (n) {
    console.log(n);
    if (n === 0) {
        console.log('End!');
    } else {
        countdown(n - 1);
    }
};

let myFunction = countdown;

countdown = null;

myFunction(5); // TypeError
// 마지막 줄에서 myFunction 함수를 호출했을 때, 함수가 실행되긴 하지만, 6번줄 동작을 수행할 때 호출하려는 countdown 함수가 이미 12번에서 null 값으로 변경되었기 때문에 함수가 아니라는 TypeError가 발생 -> 함수 내부에서 함수 자신을 사용하려고 하면 함수 표현식에서는 반드시 기명 함수 표현식을 사용하는게 좋다.




let countdown = function printCountdown(n) {
    console.log(n);
    if (n === 0) {
        console.log('End!');
    } else {
        printCountdown(n - 1);
    }
};

let myFunction = countdown;

countdown = null;

myFunction(5); // 정상적으로 동작
//함수 내에서 함수를 가리켜야 할 때는 꼭 함수 이름을 작성해주는 것이 안전하다