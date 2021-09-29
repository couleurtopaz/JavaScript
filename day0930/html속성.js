// html 속성 (HTML attribute)
const tomorrow = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// elem.getAttribute('속성') : 속성에 접근하기
console.log(tomorrow.getAttribute('href'));
console.log(item.getAttribute('class'));

// elem.setAttribute('속성', '값'): 속성 추가 (수정)하기
tomorrow.setAttribute('class', 'list'); // 추가
link.setAttribute('href', 'http://127.0.0.1'); // 수정

// elem.removeAttribute('속성') : 속성 제거하기
tomorrow.removeAttribute('HRef');
tomorrow.removeAttribute('CLass');