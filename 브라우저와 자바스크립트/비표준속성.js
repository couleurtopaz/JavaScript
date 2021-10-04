// 비표준 속성 다루기
// 1. 선택자로 활용

const fields = document.querySelectorAll('[field]');
console.log(fields);

// 2. 값을 표시할 태그를 구분할 때 활용
// 비표준 속성은 객체 형태의 데이터가 있을대 , 각 프로퍼티 값들이 들어갈 태그를 구분하는데 활용할 수 있다.

const fields = document.querySelectorAll('[field]');
const task = {
    title: '코드 에디터 개발',
    manager: 'CastleRing, Raccoon Lee',
    status: '',
};

for (let tag of fields) {
    const field = tag.getAttribute('field');
    tag.textContent = task[field];
}

// 3. 스타일이나 데이터 변경
// getAttribute 메소드를 활용해서 속성값 가져오고 , setAttribute 메소드를 활용하여 속성값 설정하는 원리로
// 실시간으로 스타일을 변경하거나 데이터를 변경하는데 활용가능

const fields = document.querySelectorAll('[field]');
const task = {
    title: '코드 에디터 개발',
    manager: 'CastleRing, Raccoon Lee',
    status: '',
};

for (let tag of fields) {
    const field = tag.getAttribute('field');
    tag.textContent = task[field];
}
