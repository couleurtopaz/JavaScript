function getFullName() {
    return `${user.firstName} ${user.lastName}`;
}

const user = {
    firstName: 'Tess',
    lastName: 'Jang',
    getFullName: getFullName,
};

const admin = {
    firstName: 'Alex',
    lastName: 'Kim',
    getFullName: getFullName,
};

console.log(user.getFullName()); // Tess Jang
console.log(admin.getFullName()); // Tess Jang


//  이럴 경우 this 사용 !
function getFullName() {
    return `${this.firstName} ${this.lastName}`;
}

const user = {
    firstName: 'Tess',
    lastName: 'Jang',
    getFullName: getFullName,
};

const admin = {
    firstName: 'Alex',
    lastName: 'Kim',
    getFullName: getFullName,
};

console.log(user.getFullName()); // Tess Jang
console.log(admin.getFullName()); // Alex Kim

/*
arrow function 에서 this 의 값은 일반 함수처럼 호출한 대상에 따라 상대적으로 변하지 않고, arrow function 이 선언 되기 직전에 유효한 this 값과 똑같은 값을 가지고서 동작한다.

따라서 this 의 값은 window 객체가 된다. -> undefined
this 메소드를 호출한 객체를 가리키고 싶다면 arrow function 보다는 일반 함수를 활용하는게 좋다.

this 를 활용한 메소드를 다른 여러객체에 활용한다고 해서 반드시 전역 스코프를 가지는 함수를 만들 필요는 없다. 일반 함수로 this 를 활용한 메소드를 객체 내부에 선언하고 다른 객체에서 그 메소드를 참조하더라도 this 는 항상 그 메소드를 호출한 객체를 가리키게 된다.

*/