// Parameter
function greeting(name) { // name 이 parameter
    console.log(`Hi My name is ${name}!`); 
}

greeting('Hyewon') // 여기서 Hyewon은 arguement (파라미터로 값을 전달하는 부분)
greeting();  // 이럴경우 Hi My name is undefined!



// 근데 파라미터에 기본값을 줄 경우
function greeting(name = 'HYE') { // name 이 parameter
    console.log(`Hi My name is ${name}!`);
}
greeting(); // 이럴 경우 HYE 출력
greeting(undefined) // undefined를 통해서도 기본값을 출력할 수 있다.

// 만약 null을 넣는다면 기본값이 출력 되는게 아니라, null 이 출력된다.


