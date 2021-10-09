// 조건 연산자
// 조건 ? truthy 할 때 표현식 : falsy 할 때 표현식
// 삼항 연산자 
// 조건에 따라 변수를 선언하거나 반복문을 선언할 수 없다. 


const CUT_OFF = 80;

function passChecker(score) {
    // if (score > CUT_OFF) {
    //     return '합격';
    // } else {
    //     return '불합격';
    // }
    
    return score > CUT_OFF ? '합격' : '불합격';
}

console.log(passChecker(75)); // 불합격

