/*
이벤트 위임을 활용할 수 있도록 이벤트 핸들러 updateToDo 함수를 완성해 주세요. updateToDo는 이벤트가 발생한 대상이 item이라는 클래스 속성 값을 가지고 있을 때 동작해야 합니다.
이벤트 핸들러를 li 태그 각각에 등록하는 것이 아니라 하나의 태그에만 등록해 주세요.
*/


const toDoList = document.querySelector('#to-do-list');

function updateToDo(event) {
    event.target.classList.add('done')
}

toDoList.addEventListener('click', updateToDo)

// 테스트 코드
const newToDo = document.createElement('li');
newToDo.textContent = '가계부 정리하기';
newToDo.classList.add('item');
toDoList.append(newToDo);

toDoList.children[2].addEventListener('click', function (e) { e.stopPropagation() });