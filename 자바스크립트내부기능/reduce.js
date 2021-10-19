// reduce
const members = [1, 2, 3, 4];

const sumAll = numbers.reduce((acc, el, i) => {
    console.log(`${i}번 index의 요소로 콜백함수가 동작중입니다.`);
    console.log('acc : ', acc);
    console.log('el: ', el);
    console.log('-------------');

    return acc + el;
}, 0); // 초기값을 명시해 두는것이 더 안전하다.

console.log('sumAll:', sumAll);


/*
출력 값:

0번 index의 요소로 콜백함수가 동작중입니다.
acc : 0
el: 1
-------------
1번 index의 요소로 콜백함수가 동작중입니다.
acc : 1
el: 2
-------------
2번 index의 요소로 콜백함수가 동작중입니다.
acc : 3
el: 3
-------------
3번 index의 요소로 콜백함수가 동작중입니다.
acc : 6
el: 4
-------------
sumAll: 10
*/



// exercise
/*
reduce 메소드를 활용해서 상원이가 일한 경력(개월 수)을 합산한 값을 totalCareer 변수에 담아주세요.
*/

const data = [
    { company: 'Naber', month: 3 },
    { company: 'Amajohn', month: 12 },
    { company: 'Coogle', month: 10 },
    { company: 'Ittel', month: 6 },
    { company: 'Sasung', month: 4 },
    { company: 'CaCao', month: 3 },
    { company: 'Microhard', month: 17 },
];

// 여기에 코드를 작성해 주세요.
const totalCareer = data.reduce((acc, el) => acc + el.month, 0);

console.log(`상원이의 경력은 총 ${totalCareer}개월입니다.`);
