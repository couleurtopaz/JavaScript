/*
이벤트 객체를 활용한 이벤트 핸들러, updateToDo 함수를 완성해 주세요. 이 함수는 이벤트가 발생한 대상에 'done'이라는 class 속성값을 toggle하는 함수여야 합니다.
반복되는 부분들이 좀 더 간단하게 정리되도록 이벤트 핸들러를 등록하는 반복문을 작성해 주세요.
*/

const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;

function updateToDo(event) {
    event.target.classList.toggle('done'); // 이벤트가 발생한 대상에 'done'이라는 class 속성값을 toggle하는 함수니깐, 이벤트 객체의 target을 활용
}
/*
for (let item of items) {
    item.addEventListener('click', updateToDo);
}
*/
 
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', updateToDo);
}



// 테스트 코드
items[2].removeEventListener('click', updateToDo);