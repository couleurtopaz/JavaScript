/*
1. forEach 메소드를 활용해주세요.
2. 할 일들은 li태그로 만들어 주세요.
3. 할 일들은 기본적으로 item 이라는 클래스를 가지고 있어야 합니다.
4. 할 일 중에서 isClear 프로퍼티가 true인 할 일은 done 이라는 클래스도 추가해 주세요.
5. 할 일들에 1부터 시작하는 번호를 매겨주세요. (ex) 1. 게임하기 2. 쇼핑하기 3. ...)
6. 할 일들은 <ul class="list"></ul>태그 안에 넣어주세요.
*/

const list = document.querySelector('.list');
const data = [{
    title: '자바스크립트 공부하기',
    isClear: true,
}, {
    title: '쓰레기 분리수거',
    isClear: false,
}, {
    title: '고양이 밥주기',
    isClear: true,
}, {
    title: '독서하기',
    isClear: false,
}, {
    title: '영어 공부하기',
    isClear: false,
}
];

// 여기에 코드를 작성해 주세요.
data.forEach((todo, i) => { // 1번 조건
    const li = document.createElement('li'); // 2번 조건 

    if (todo.isClear) {
        li.classList.add('item', 'done'); // 4번 조건
    } else {
        li.classList.add('item'); // 3번 조건
    }

    li.textContent = `${i + 1}. ${todo.title}`; // 5번 조건
    list.appendChild(li); // 6번 조건
});