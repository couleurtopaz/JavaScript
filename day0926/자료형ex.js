/*
재훈이가 겪은 문제를 해결하면서, 카페 모카(mocha) 와 바닐라 라떼(vanillaLatte) 레시피도 만들어 주세요.
모카는 에스프레소에 우유와 초코 시럽을, 바닐라 라떼는 에스프레소에, 우유와 바닐라 시럽을 더한 메뉴입니다.
*/

// 아래 코드중 잘못된 부분을 수정해 주세요.
let espresso = ['espresso'];

let americano = espresso.slice();
americano.push('water');

let caffeLatte = espresso.slice();
caffeLatte.push('milk');

// 여기에 caffeMocha와 vanillaLatte 레시피를 만들어 주세요.
let caffeMocha = caffeLatte.slice();
caffeMocha.push('chocolateSyrup');

let vanillaLatte = caffeLatte.slice();
vanillaLatte.push('vanillaSyrup');

// 테스트 코드
console.log(espresso);
console.log(americano);
console.log(caffeLatte);
console.log(caffeMocha);
console.log(vanillaLatte);

/*
실행결과
[ 'espresso' ]
[ 'espresso', 'water' ]
[ 'espresso', 'milk' ]
[ 'espresso', 'milk', 'chocolateSyrup' ]
[ 'espresso', 'milk', 'vanillaSyrup' ]
*/