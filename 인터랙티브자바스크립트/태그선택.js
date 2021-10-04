// document객체의 getElementById : id속성을 통해 태그를 선택하는 메소드 

const myTag = document.getElementById('myNumber');
console.log(myTag);

// html문서에 존재하지 않는 id값으로 태그를 선택하면 그 값은 null 이 된다.


// class 로 태그 선택하기
document.getElementsByClassName('color-btn');
console.log(myTags);
console.log(myTags[1]);
console.log(myTags.length);

for (let tag of myTags) {
    console.log(tag);
}
    
/*
유사배열 : 배열과 모양은 같지만, 완벽한 배열은 아닌 형태

1. 숫자 형태의 indexing이 가능하다.
유사배열도 마찬가지로 배열처럼 0부터 시작하는 숫자 형태의 Index가 있어야한다.
2. length 프로퍼티가 있음
3. 배열의 기본 메소드를 사용할 수 있다.
4. Array.isArray(유사배열)의 리턴값은 false다.

*/

// css 선택자로 태그 선택하기
const myTag = document.querySelector('#myNumber');
// querySelector 메소드를 활용할때, 클래스나 태그 이름처럼 여러 개의 요소가 존재하는 선택자를 쓰더라도 가장 첫번째 요소 하나만 선택한다.

const myTag = document.querySelectorAll('.color-btn');
// 여러개의 요소가 선택되기 때문에, NodeList라는 이름의 유사 배열에 각 요소가 담긴다. 만약 존재 하지 않는 요소를 선택할경우, 비어있는 nodeList가 리턴된다.

