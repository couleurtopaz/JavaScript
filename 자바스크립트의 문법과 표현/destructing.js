
/*
구조 분해 Destructuring
배열과 객체와 같이 내부에 여러 값을 담고 있는 데이터 타입을 다룰 때 Destructuring 문법을 활용하면, 배열의 요소나 객체의 프로퍼티 값들을 개별적인 변수에 따로 따로 할당해서 다룰 수가 있습니다.

*/
const rank = ['유나', '효준', '민환', '재하', '규식'];

// const macbook = rank[0]; // 유나
// const ipad = rank[1]; // 효준
// const airpods = rank[2]; // 민환
// const coupon = rank[3]; // 재하
const [macbook, ipad, airpods, ...coupon] = rank; // 할당되는 연산자 오른쪽 (rank 부분)이 배열의 형식이 아니거나 아무것도 없으면 에러

console.log(macbook); // 유나
console.log(ipad); // 효준
console.log(airpods); // 민환
console.log(coupon); // ["재하", "규식"] // ... -> rest parameter 처럼 배열 분해가 가능하다. 마지막 변수에만.


const [macbook, ipad, airpods, coupon = '없음'] = rank; // 기본값 할당 가능하다.


 // -----------------

let macbook = '효준';
let ipad = '유나';

console.log('Macbook 당첨자: ', macbook); // Macbook 당첨자: 효준
console.log('ipad 당첨자: ', ipad); // ipad 당첨자: 유나

[macbook, ipad] = [ipad, macbook];

console.log('Macbook 당첨자: ', macbook); // Macbook 당첨자: 유나
console.log('ipad 당첨자: ', ipad); // ipad 당첨자: 효준



