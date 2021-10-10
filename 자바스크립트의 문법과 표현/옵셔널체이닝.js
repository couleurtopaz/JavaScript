/*

일반적으로 객체의 프로퍼티는 점 표기법을 통해서 접근한다.

*/

function printDogName(user) {
    console.log(user.dog.name);
}

const user1 = {
    name: 'DDang-e',
    dog: {
        name: 'tang',
        breed: 'Yorkshir',
    }
}

printDogName(user1) // 'tang'

// ------------------

// dog 프로퍼티를 가지고 있지 않은 user2 는 undefined -> user2.dog.name 에 접근하려는 순간 에러.
const user2 = {
    name: 'Mochi',
}
console.log(user2.dog); // undefined
printDogName(user2) // TypeError : cannot read property 'name' of undefined.

// -> 따라서 중첩된 객체의 프로퍼티를 다룰때에는 user.cat.name 에 접근하기 전에 user.cat이 null 혹은 undefined가 아니라는 것을 검증하고 접근해야 에러 방지 가능.

function printDogName(user) {
    console.log(user.dog?.name);
}
 // 옵셔널 체이닝 : '  ?. ' 만약 옵셔널 체이닝 연산자 왼편의 프로퍼티 값이 undefined 혹은 null 이 아니라면, 그 다음 프로퍼티 값을 리턴하고, 그렇지 않은경우에는 undefined 반환

/* 풀어 쓰면 이와 같다고 보면 된다 

function printDogName(user) {
    console.log((user.dog === null || user.dog === undefined) ? undefined : user.dog.name);
}

*/

function printDogName(user) {
    console.log(user.dog?.name ?? '함께 지내는 강아지가 없습니다.');
}

const user2 = {
    name: 'DDang-e',
}
printDogName(user2) // 함께 지내는 강아지가 없습니다.
 
 