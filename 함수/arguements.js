/*

우리 일상생활에 여러 단어가 조합된 단어를 앞 글자만 따서 다시 한번 더 줄여쓴 줄임말들이 넘쳐나고 있는데요.
arguments 객체를 활용해서 함수를 호출할 때 전달하는 단어들의 첫 글자만 따서 줄임말을 만들어주는 firstWords 함수를 완성해 주세요.

*/

function firstWords() {
    let word = '';

    for (const arg of arguments) {
        word += arg[0];
    }

    console.log(word);
}

firstWords('나만', '없어', '고양이');
// 나없고