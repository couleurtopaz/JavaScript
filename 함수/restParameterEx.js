/*
rest parameter를 활용해서 함수를 호출할 때 여러 개의 아규먼트를 전달할 경우 첫 번째 아규먼트는 무시하고 두 번째 아규먼트 부터 하나씩 콘솔에 출력하는 ignoreFirst 함수를 완성해 주세요!
*/

function ignoreFirst(first, ...others) {
    for (const arg of others) {
        console.log(arg)
    }
}

ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);