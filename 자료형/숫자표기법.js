// 숫자 표기법
let millionaire = 1000000000;
let myNumber = 1e9; // 지수 표기법

// 16진법 (Hexadecimal)
let hex1 = 0xff; // 255
let hex2 = 0xFF; // 255

// 8진법 (Octal)
let octal = 0o377; // 255

// 2진법 (binary numeral system)
let binary = 0b11111111; //255

console.log(hex1);
console.log(hex2);
console.log(octal);
console.log(binary);

// Number 
let myNumber = 0.3591;

// toFixed (0 ~ 100)
console.log(myNumber.toFixed(3)); // -> 이 값은 string 으로 출력
console.log(Number(myNumber.toFixed(3))); // -> 숫자형으로 형변환
console.log(+myNumber.toFixed(3)); // -> 숫자형으로 출력

// Number
let myNumber = 255;

// toString ( 2 ~ 36 )
console.log(myNumber.toString(2)); // 2진수로 변환
console.log(myNumber.toString(8)); // 8진수로 변환
console.log(myNumber.toString(16)); // 16진수로 변환

// 숫자를 점 표기법으로 표현할때는
console.log(255..toString(2)); // 점 두개로 표현
console.log((255).toString(2)); // 괄호로 표현
console.log(myNumber.toString(2)); 