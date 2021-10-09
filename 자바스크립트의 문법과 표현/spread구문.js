/* Spread 구문
1. 배열 병합. 기존에 concat 을 사용했지만 더 간결하게 spread 연산자를 통해 배열 병합 가능
2. 배열 복사. 원본 배열 변경하지 않고 배열을 복사할 수 있으며, 그 값에 새로운 값을 추가도 가능하다.
*/


const numbers = [1, 2, 3];

console.log(numbers); // [1, 2, 3]
console.log(...numbers); // 1, 2, 3



// --------------------


const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = webPublishing;

interactiveWeb.push('JavaScript');

console.log(webPublishing); // ['HTML', 'CSS, 'JavaScript']
console.log(interactiveWeb); //['HTML', 'CSS, 'JavaScript']





const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = webPublishing.slice();

interactiveWeb.push('JavaScript');

console.log(webPublishing); // ['HTML', 'CSS]
console.log(interactiveWeb); //['HTML', 'CSS, 'JavaScript']




const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = [...webPublishing];

interactiveWeb.push('JavaScript');

console.log(webPublishing); // ['HTML', 'CSS]
console.log(interactiveWeb); //['HTML', 'CSS, 'JavaScript']




const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = [...webPublishing, 'JavaScript'];


console.log(webPublishing); // ['HTML', 'CSS]
console.log(interactiveWeb); //['HTML', 'CSS, 'JavaScript']


// -----------------------

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

const arr4 = arr1.concat(arr2);
console.log(arr4); // [1, 2, 3, 4, 5, 6]


// -------------------------

const member = ['태호', '종훈', '우재'];

const newObject = { ...member };
console.log(newObject); // {0: "태호", 1:"종훈", 2:"우재"}