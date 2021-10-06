/*
 * [마우스 이동 이벤트]
  
  > MouseEvent.type
 * mousemove: 마우스 포인터가 이동할 때
 * mouseover: 마우스 포인터가 요소 밖에서 안으로 이동할 때
 * mouseout: 마우스 포인터가 요소 안에서 밖으로 이동할 때 
 
  > MouseEvent.target
  : 이벤트가 발생한 요소
 
  > MouseEvent.relatedTarget
  : 이벤트가 발생하기 직전(또는 직후)에 마우스가 위치해 있던 요소
 
  > MouseEvent.clientX, clientY 
  : 화면에 표시되는 창 기준 마우스 포인터 위치 (x좌표, y좌표)  
  
  > MouseEvent.pageX, pageY
  : 웹 문서 전체 기준 마우스 포인터 위치. 스크롤로 인해서 보이지 않게된 화면의 영역까지 포함해서 측정
 
  > MouseEvent.offsetX, offsetY
  : 이벤트가 발생한 요소(target) 기준 마우스 포인터 위치
  이벤트가 발생한 대상을 기준으로 계산하기 때문에 스크롤 위치와는 무관하게 항상 대상의 좌측 상단의 모서리 위치를 (0, 0)으로 계산
 */

const box1 = document.querySelector('#box1');

function onMouseMove(e) {
    console.log(`client: (${e.clientX}, ${e.clientY})`);
    console.log(`page: (${e.pageX}, ${e.pageY})`);
    console.log(`offset: (${e.offsetX}, ${e.offsetY})`);
    console.log('------------------------------------');
}

box1.addEventListener('mousemove', onMouseMove);


const box2 = document.querySelector('#box2');

function printEventData(e) {
    if (e.target.classList.contains('cell')) {
        e.target.classList.toggle('on');
    }
}

function printEventData(e) {
    console.log('event:', e.type);
    console.log('target:', e.target);
    console.log('relatedTarget:', e.relatedTarget);
    console.log('------------------------------------');
    if (e.target.classList.contains('cell')) {
        e.target.classList.toggle('on');
    }
}

box2.addEventListener('mouseover', printEventData);
box2.addEventListener('mouseout', printEventData);


/*
mouseover & mouseenter  ,  mouseout & mouseleave 차이점

1. mouseenter 와 mouseleave 는 버블링이 일어나지 않는다.
버블링과 이벤트 위임의 원리로 자식요소에서 이벤트가 발생하지 않는다.

2. mouseenter와 mouseleave 는 자식요소의 영역을 구분하지 않는다


*/