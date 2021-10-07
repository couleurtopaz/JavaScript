
// 변수 : 데이터를 저장하는 공간

/*

var : 변수 재선언 , 변수 재할당 가능
let : 변수 재선언 불가능, 변수 재할당 가능
const : 변수 재선언 불가능, 변수 재할당 불가능

*/

var a = '변수입니다.'; 문자열
var b = 1; 숫자변수
var c = ['H', 'G']; //배열
var d = true // boolean 형태

var a = '안녕하세요.';
console.log('a 변수 :' + a);
var a = '감사합니다.';
console.log('a 변수 :' + a); // 재선언의 문제. 변수 a 가 마지막에는 감사합니다로 바뀐다

// Hoisting : 해당 변수가 속한 범위(Scope) 최상단으로 올리는 현상


var a = '안녕하세요.'
function func() {
    console.log(a); // undefined
    var a = '감사합니다.';
    console.log(a); // 감사합니다
}
func()

function func() {
    var a = '안녕하세요.';
    console.log(a); // 안녕하세요
    var a = '감사합니다.';
    console.log(a); // 감사합니다
}
func()

let a = '안녕하세요.';
function func() {
    console.log(a); // 안녕하세요
    a = '감사합니다.';
    console.log(a); // 감사합니다
}
func();

/*

스코프 : 변수와 함수가 작용할 수 있는 유효범위
유효범위를 기준으로 변수, 함수를 부를 수 있거나 없다.

전역 스코프 
- function(){} 이 아닌 밖의 영역
- 전역 스코프에서 선언하면, 어디서든지 부를 수 있다.
- 어디서든지 재선언, 재할당이 가능하다.

지역 스코프 
- function(){} 안의 영역
- 지역 내에서 선언한 변수는 지역 내에서만 쓸 수 있다.
- 함수 스코프와 블록 스코프로 나뉨.

*/

// 함수 스코프: 함수를 기준으로 스코프를 구분
function sayHi() {
    var userName = 'codeit';
    console.log(`Hi ${userName}!`);
}

console.log(userName); // ReferenceError

// 블록 스코프: 중괄호로 감싸진 코드 블록에 따라 유효 범위를 구분
function sayHi() {
    const userName = 'codeit';
    console.log(`Hi ${userName}!`);
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

{
    let language = 'JavaScript';
}

console.log(userName); // ReferenceError
console.log(i); // ReferenceError
console.log(language); // ReferenceError
