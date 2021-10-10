// 중괄호 안에서 객체를 spread 하게되면, 해당 객체의 프로퍼티들이 펼쳐지면서 객체를 복사할 수 있다
const hyewon = {
    name: 'HYE',
}

const hyewonClone = {
    ...hyewon, // spread 문법
}

console.log(hyewon); // {name: "HYE"}
console.log(hyewonClone); // {name: "HYE"}


// ---------------------


// spread 구문을 사용해서 다른 객체가 가진 프로퍼티에 다른 프로퍼티를 추가해서 새로운 객체를 만들 때 활용 할 수 있다.
const latte = {
    esspresso: '30ml',
    milk: '150ml'
};

const cafeMocha = {
    ...latte,
    chocolate: '20ml',
}

console.log(latte); // {esspresso: "30ml", milk: "150ml"}
console.log(cafeMocha); // {esspresso: "30ml", milk: "150ml", chocolate: "20ml"}



// -----------------------

// spread 구문을 사용해서 새로운 배열을 만든다거나, 함수의 아규먼트로 사용할 수 없다.
// 객체를 spread 할때는 반드시 객체를 표현하는 중괄호 안에서 활용해햐한다.

const latte = {
    esspresso: '30ml',
    milk: '150ml'
};

const cafeMocha = {
    ...latte,
    chocolate: '20ml',
}

// [...latte]; // Error

(function (...args) {
    for (const arg of args) {
        console.log(arg);
    }
})(...cafeMocha); // Error