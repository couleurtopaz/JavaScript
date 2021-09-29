// 요소 노드 주요 프로퍼티
const myTag = document.querySelector('#list-1');

// innerHTML : 지정한 요소 태그를 제외한 안쪽 태그만 값을 가져온다
// 요소 노드 내부의 HTML 코드를 문자열로 리턴해준다.
// 요소안의 정보를 확인할 수 있지만 , 내부 HTML 자체를 수정할때 더 활용

console.log(myTag.innerHTML);
myTag.innerHTML = '<li>Exotic</li>'; // 요소 값 전체를 수정할때
myTag.innerHTML += '<li>Exotic</li>'; // 요소에 값 추가

// outerHTML : 지정한 요소 태그도 포함하여 값을 가져오고 선택한 엘리먼트를 포함해서 처리
// 요소 노드 자체의 전체적인 html 코드를 문자열로 리턴해준다. 
// 새로운 값을 할당할 경우, 요소 자체가 교체되어 버리므로 주의.

console.log(myTag.outerHTML);
myTag.outerHTML = '<ul id="new-list"><li>Exotic</li></ul>';

// textContext : 요소안의 내용중에 HTML 제외한 텍스트만 가져온다.
// 새로운 값을 할당하면, innerhtml과 마찬가지로 내부의 값을 완전히 새로운 값으로 교체
// 하지만 텍스트만 다루므로 특수문자도 텍스트로 처리함

console.log(myTag.textContent);
myTag.textContent = '<li>new text!</li>';