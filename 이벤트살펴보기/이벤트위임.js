// 이벤트 위임 (Event Delegation) : 새로운 자식요소를 삭제하거나 추가하여도 이벤트에 대한 제어를 자식에서 안해도 된다.
const list = document.querySelector('#list');
list.addEventListener('click', function (e) {
    // if (e.target.tagName === 'LI')
    if (e.target.classList.contains('item')) {
        e.target.classList.toggle('done');
    }
});


const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);
li.addEventListener('click', function (e) {
    e.stopPropagation();
});



