/* 
단어를 추가하는 addVoca메소드를 만들어 주세요.addVoca메소드는 영어단어와 뜻, 총 두 개의 문자열 값을 파라미터로 전달받아서 myVoca 객체에 새로운 프로퍼티를 추가하는 메소드 입니다.
단어를 삭제하는 deleteVoca메소드를 만들어 주세요.deleteVoca메소드는 영단어 문자열을 파라미터로 전달받아서 해당하는 단어를 삭제하는 메소드 입니다.
단어를 출력하는 printVoca메소드를 만들어 주세요.printVoca메소드는 영어단어 문자열을 파라미터로 전달받아서 특별한 포멧의 문자열을 콘솔에 출력하는 메소드 입니다.특별한 포멧은 "[영어단어]"의 뜻은 "[뜻]"입니다.로 제작해 주세요.
*/

let myVoca = {
    addVoca: function (key, value) {
        myVoca[key] = value;
    },
    deleteVoca: function (key) {
        delete myVoca[key];
    },
    printVoca: function (key) {
        console.log(`"${key}"의 뜻은 "${myVoca[key]}"입니다.`);
    }
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');

/*

실행 결과
{
  addVoca: [Function: addVoca],
  deleteVoca: [Function: deleteVoca],
  printVoca: [Function: printVoca],
  parameter: '매개 변수',
  element: '요소',
  property: '속성'
}
{
  addVoca: [Function: addVoca],
  deleteVoca: [Function: deleteVoca],
  printVoca: [Function: printVoca],
  property: '속성'
}
"property"의 뜻은 "속성"입니다.

*/