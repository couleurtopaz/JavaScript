// some 과 every
const numbers = [1, 3, 5, 7, 9];

// some : 조건을 만족하는 요소가 1개 이상 있는지. 조건에 맞는 첫번째 요소를 찾는 순간 true 리턴. 반복 종료
const someReturn = numbers.some((el, i) => {
    console.log('some:', i);
    return el > 5;
});

// every : 모든 요소가 조건을 만족 하는지
const everyReturn = numbers.every((el, i) => {
    console.log('every:', i);
    return el > 5;
});

console.log('some: ', someReturn);
console.log('every: ', everyReturn);