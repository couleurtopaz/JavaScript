// 객체 지향 프로그래밍 : 프로퍼티와 메소드로 이루어진 각 객체들의 상호작용을 중심으로 코드를 작성하는 것
// 절차 지향 프로그래밍 : 변수와 함수를 가지고 작업의 순서에 맞게 코드를 작성 하는 것

function createUser(email, birthdate) {
    const user = {
        email: email,
        birthdate: birthdate,
        buy(item) {
            console.log(`${this.email} buys ${this.name}`);
        },
    };
    return user;
}

const user1 = createUser('hyewon@gmail.com', '1994-11-23');
const user2 = createUser('ccoco@gmail.com', '1993-11-07');
const user3 = createUser('cdo2@gmail.com', '1992-11-08');


// Cunstructor Function 
function User(email, birthdate) { 
    this.email = email;
    this.birthdate = birthdate;
    this.buy = function (item) {
        console.log(`${this.email} buys ${this.name}`);
    };
}

const user1 = new User('couleur@mail.com', '1990-08-08');