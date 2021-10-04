

// let vs const
// let은 변수에 재할당이 가능하다.

let name = 'bathingape'
console.log(name) // bathingape

let name = 'javascript'
console.log(name)
// Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'react'
console.log(name) //react

// const는 변수 재선언, 변수 재할당 모두 불가능하다

const name = 'bathingape'
console.log(name) // bathingape

const name = 'javascript'
console.log(name)
// Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'react'
console.log(name)
//Uncaught TypeError: Assignment to constant variable.

// 변수 선언에는 기본적으로 const를 사용하고, 재할당이 필요한 경우 한정해 let 을 사용
