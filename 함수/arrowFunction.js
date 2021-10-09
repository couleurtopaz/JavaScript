
const getTwice = function (number) {
    return number * 2;
}

console.log(getTwice(5));

const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', function () {
    console.log('button is clicked');
})

// Arrow Function 으로 바꾸면 !!
const getTwice = (number) => {
    return number * 2;
}

const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', () => {
    console.log('button is clicked');
})


// 더 간단하게 바꿀 수 도 있음
const getTwice = number => number * 2;
console.log(getTwice(4));


// 괄호 생략 가능하다 ! 하지만 파라미터가 없거나 두개 이상일때는 생략 불가하다.
const getTwice = number => {
    return number * 2;
}

const sum = (a, b) => {
    return a + b;
}

const getHyewon = () => {
    return { name: 'Hyewon', };
}

console.log(sum(10, 5));
console.log(getHyewon());

 // * 만약 arguments 객체를 사용하는 함수라면 arrow function 으로 대체하기는 어렵다.