let myString = 'Code it'; // -> String
let myArray = ['C', 'o', 'd', 'e', 'i', 't']; // -> Object

for (let str of myString) {
    console.log(str);
}

/* 
결과 
C
o
d
e
i
t
*/

// 가장 중요한 차이는 배열은 'mutable(바뀔 수 있는)' 자료형인 반면에, 문자열은 'immutable(바뀔 수 없는)' 자료형 이다. 
// 배열은 요소에 접근해서 할당 연산자를 통해 요소를 수정 할 수 있는 반면, 문자열은 한 번 할당된 값을 바꿔줄 수 없다. 변수에 할당된 문자열을 바꾸고 싶으면
// 일부를 바꾸는 게 아니라 새로운 문자열을 지정해 주어야 한다.