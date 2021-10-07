// 자바스크립트의 데이터 타입 :  number, string, boolean, null, undefined, object, symbol, bigint

// Symbol 은 기본형 데이터 타입 중 하나이다. 심볼은 코드 내에서 유일한 값을 가진 변수 이름을 만들 때 사용

const user = Symbol();
const user = Symbol('this is a user'); // 이렇게 Symbol 값을 담게 된 user 이름의 변수는 다른 어떤 값과 비교해도 true 가 될 수 없는 고유한 변수

// 심지어 같은 설명을 붙인 심볼을 만들더라도 그 값을 비교하면 false
const symbolA = Symbol('this is Symbol');
const symbolB = Symbol('this is Symbol');

console.log(symbolA === symbolB); // false





