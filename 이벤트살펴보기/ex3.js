/*
1. showTitle 함수
showTitle 함수가 호출되면 가장 먼저 조건문을 통해 이벤트 객체의 target 프로퍼티에 담긴 요소에 data-title 속성의 값을 가지고 있는지 확인합니다.
조건문이 true일 경우 span 태그 형태의 요소 노드를 생성합니다.
이 요소 노드는 'title'이라는 class 값을 가지고 있어야 합니다.
이 요소 노드의 내부에 target 프로퍼티에 담긴 요소의 data-title 속성에 담긴 값을 할당해 주세요.
이 요소 노드를 target 프로퍼티에 담긴 요소의 마지막 자식 요소 노드로 추가해 주세요.
2. removeTitle 함수
showTitle 함수가 호출되면 가장 먼저 조건문을 통해 이벤트 객체의 target 프로퍼티에 담긴 요소에 data-title 속성의 값을 가지고 있는지 확인합니다.
조건문이 true일 경우 이벤트 객체의 target 프로퍼티에 담긴 요소의 가장 마지막 자식 요소를 제거해 주세요.
3. 이벤트 핸들러 등록하기
앞서 만든 두 이벤트 핸들러를 하나의 요소 노드에만 등록해도 각 태그에 이벤트가 동작하도록 해주세요.
이벤트 위임을 고려했을 때 어떤 요소 노드에 이벤트 핸들러를 등록하면 좋을지 대상 부분을 수정해 주세요.
이벤트 위임을 고려했을 때 각각 타입의 이벤트로 이벤트 핸들러를 등록하면 좋을지 타입 부분을 수정해 주세요.
*/


function showTitle(e) {
    if (e.target.dataset.title) { // dataset 객체를 통해 data 속성을 가져오기 위해서는 속성 이름의 data- 뒷 부분을 사용
        const span = document.createElement('span');
        span.classList.add('title');
        span.textContent = e.target.dataset.title;
        e.target.append(span); // span 태그를 마지막 자식 요소로 추가
    }

}
function removeTitle(e) {
    if (e.target.dataset.title) {
        e.target.lastElementChild.remove(); // 마지막 자식요소 삭제
    }
}

const map = document.querySelector('.map');
map.addEventListener('mouseover', showTitle); // mouseover 와 mouseout은  이벤트 버블링이 일어나고 자식 요소 노드들의 범위도 구분
map.addEventListener('mouseout', removeTitle);