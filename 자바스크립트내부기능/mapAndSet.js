/*
Map : 이름이 있는 데이터를 저장한다.
메소드를 통해서 값을 추가하거나 접근할 수 있다.
map.set(key, value): key를 이용해 value를 추가하는 메소드.
map.get(key): key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
map.has(key): key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드.
map.delete(key): key에 해당하는 값을 삭제하는 메소드.
map.clear(): Map 안의 모든 요소를 제거하는 메소드.
map.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)
*/

// Map 생성
const codeit = new Map();

// set 메소드
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

// get 메소드
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

// size 프로퍼티
console.log(codeit.size); // 3

// delete 메소드
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0