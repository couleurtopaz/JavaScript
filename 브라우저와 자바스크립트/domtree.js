// DOM 트리 여행하기
const myTag = document.querySelector('#content')

console.log(myTag);

// 부모 요소 노드
console.log(myTag.parentElement);

// 자식 요소 노드
console.log(myTag.children[1]);
console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);

// 형제 요소 노드
console.log(myTag.previousSibling);
console.log(myTag.nextElementSibling);

console.log(myTag.parentElement.nextElementSibling);

/*
DOM 트리를 구성할때, 
HTML 태그는 요소 노드가 되고, 문자들은 텍스트 노드
주석은 주석노드로 dom 트리에 반영
*/
