/*
let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

여기, dataType 이라는 이름의 6개의 요소를 가진 배열이 있습니다.
이 배열의 요소들을 모두 출력하는 프로그램을 작성해 보세요.
반복문의 개념을 활용하시면 어렵지 않게 해결할 수 있습니다.
*/

let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];
let i = 0;
while (i <= dataType.length) {
    console.log(dataType[i])
    i++;
}