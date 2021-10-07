/* 함수를 만드는 방법

함수 선언 방식과 함수 표현식의 가장 큰 차이 : 호이스팅, 스코프

함수 선언 방식은 호이스팅으로 인해서 함수를 선언하기 이전에 함수를 호출해도 정상적으로 동작함.
함수 표현식은 반드시 변수가 선언된 이후에 함수를 호출해야 정상적으로 동작

var -> 호이스팅이 되지만, 선언문 자체만 호이스팅되고, 할당된 값은 변수 선언 이후에 사용할 수 있다

함수 선언 방식 -> 함수 스코프
함수 표현식 -> 변수에 할당되는 경우에는 할당된 변수의 특성에 따라 스코프가 결정
var 키워드 변수에 할당 -> 함수 스코프 / let이나 const -> 블록 스코프


*/




// 함수 선언
function 함수이름(파라미터) {
    동작
    return 리턴값
}





// 함수 표현식 : 함수 선언을 값처럼 
const printHyewon = function () {
    console.log('Hyewon zzang');
}
printHyewon();






// 함수 선언과 함수 표현식의 차이점

printHyewon(); // Hyewon zzang 함수를 선언 하기 전에 함수 호출 가능 (호이스팅)

function printHyewon() {
    console.log('Hyewon zzang');
}






printHyewon(); // ReferenceError 함수 표현식은 선언 이전에 접근 불가능

const printHyewon = function () {
    console.log('Hyewon zzang');
}





function printHyewon() {
    function printJS() {
        console.log('Js');
    }

    console.log('Hye');
    printJS();
}
printHyewon(); 
printJS();

/*
Hye
JS
ReferenceError
*/




const x = 4;

if (x < 5) {
    function printJS() {
        console.log('JS');
    }
}

{
    function printHyewon() {
        console.log('HYE');
    }
}

printHyewon()
printJS()

/*
HYE
JS
*/