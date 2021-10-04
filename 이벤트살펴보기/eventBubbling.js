// 이벤트 버블링 : 특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 요소들로 전달되어 가는 특성을 의미 (하위 -> 상위)
// 캡쳐링은 버블링과 반대 방향으로 전달되는 특성

const content = document.querySelector('#content');
const title = document.querySelector('#title');
const list = document.querySelector('#list');
const items = document.querySelectorAll('.item');

content.addEventListener('click', function (e) {
    console.log('content Event');
    console.log(e.Target); // 부모요소의 핸들러들이 최초의 이벤트가 발생한 위치를 정확히 파악. 
    // 이벤트 버블링이 발생해도 이벤트 객체의 타겟프로퍼티는 변하지 않는다.처음 시작점을 담고 있다
});

title.addEventListener('click', function (e) {
    console.log('title Event');
    console.log(e.currentTarget); // 이벤트 핸들러가 등록된 요소에 접근할때는 currentTarget
});

list.addEventListener('click', function (e) {
    console.log('list Event');
    console.log(e.currentTarget);
});

for (let item of items) {
    item.addEventListener('click', function (e) {
        console.log('item Event');
        console.log(e.currentTarget);
        e.stopPropagation(); // 버블링 멈추기
    });
}