/**
 * [키보드 이벤트]
 *
 * > KeyboardEvent.type
 * keydown: 키보드 버튼을 누른 순간
 * keypress: 키보드 버튼을 누른 순간
 * keyup: 키보드 버튼을 눌렀다 뗀 순간
 *
 * > KeyboardEvent.key
 * : 이벤트가 발생한 버튼의 값
 *
 * > KeyboardEvent.code
 * : 이벤트가 발생한 버튼의 키보드에서 물리적인 위치
 */


/*
enter 키로 메시지를 전송하고 나면 textarea 태그는 초기화가 제대로 되어야 합니다.
shift + enter 일때는 줄바꿈이 일어나야 합니다.
keypress 타입으로 이벤트 핸들러가 등록되어야 합니다.
*/

const chatBox = document.querySelector('#chat-box');
const input = document.querySelector('#input');
const send = document.querySelector('#send');

function sendMyText() {
    const newMessage = input.value;
    if (newMessage) {
        const div = document.createElement('div');
        div.classList.add('bubble', 'my-bubble');
        div.innerText = newMessage;
        chatBox.append(div);
    } else {
        alert('메시지를 입력하세요...');
    }

    input.value = '';
}

send.addEventListener('click', sendMyText);

function sendMyTextByEnter(e) {
    if (e.key === 'Enter') {
        sendMyText();
        e.preventDefault();
    }
}
input.addEventListener('keypress', sendMyTextByEnter);