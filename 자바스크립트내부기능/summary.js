/*
forEach 메소드 : 배열의 요소를 하나씩 살펴보면서 반복작업을 하는 메소드
첫번째 아규먼트로 콜백 함수를 전달 받는다. 콜백 함수의 파라미터에는 각각 배열의 요소, index, 메소드를 호출한 배열이 전달. (index, array 생략 가능)
*/

const numbers = [1, 2, 3];

numbers.forEach((element, index, array) => {
    console.log(element); // 순서대로 콘솔에 1, 2, 3이 한 줄씩 출력됨.
});

/*
map 메소드 : 배열의 요소를 하나씩 살펴보면서 반복 작업을 하는 메소드. 단, 첫번째 아규먼트로 전달하는 콜백함수가 매번 리턴하는 값들을 모아서 새로운 배열을 만들어 리턴하는특징.
*/

const numbers = [1, 2, 3];
const twiceNumbers = numbers.map((element, index, array) => {
    return element * 2;
});

console.log(twiceNumbers); // (3) [2, 4, 6]