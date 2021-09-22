// 메소드 (Method)
// 메소드는 어떤 객체의 고유한 동작으로서, 함수에 의미를 부여한다. 어떤 객체의 메소드이냐에 따라서 그 객체에 맞는 동작을 할때 메소드를 사용한다. 메소드를 활용하면 이름 중복을 피할 수 있고 좀 더 객체에 집중하여 함수의 동작 부분을 구현할 수 있다.


let greetings = {
    sayHello: function (name) {
        console.log(`Hello! ${name}!`);
    },
    sayHi: function () {
        console.log('Hi');
    },
    sayBye: function () {
        console.log('Bye');
    }
};

greetings.sayHello('Hyewon');
greetings['sayHello']('Hyewon');


