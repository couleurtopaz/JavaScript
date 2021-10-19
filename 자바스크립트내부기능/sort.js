// sort 메소드 : 문자열 순서에 따라 배열을 정렬할 수 있다.

const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4] // sort 메소드를 사용하면 오름차순이나 내림차순 정렬이 불가하다.

const numbers = [1, 10, 21, 36000, 4];

// 오름차순 정렬 
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]


// reverse 메소드 : 배열의 순서를 뒤집어 주는 메소드
const letters = ['a', 'c', 'b'];
const numbers = [421, 721, 353];

letters.reverse();
numbers.reverse();

console.log(letters); // (3) ["b", "c", "a"]
console.log(numbers); // (3) [353, 721, 421]



