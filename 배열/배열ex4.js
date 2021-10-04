/*
range 함수의 선언문을 살펴보면 시작값(start), 갯수(count), 증가폭(step)을 파라미터로 전달받고 있습니다.
내부의 동작 부분을 살펴보면, 가장 먼저 빈 배열을 만들고 반복문을 통해 파라미터로 전달받은 개수만큼 반복하고 있는데요.반복문 내부를 살펴보면push 메소드를 통해 매 반복마다 배열의 마지막 요소로 특별한 연산식에 의한 결괏값을 추가하는 동작을 하고 있습니다.

연산식을 보면, start + i * step이니깐 사칙연산 우선순위에 따라 곱셈을 먼저 하게 되겠죠 ?

결과적으로는 range 함수를 요약하면 총 count만큼의 요소를 개수를 가지고, start값 부터 갈수록 값이 step만큼 증가하는 배열을 리턴하는 함수로 정리할 수 있습니다. 
*/

function range(start, count, step) {
    let arr = [];

    for (let i = 0; i < count; i++) {
        arr.push(start + i * step)
    }

    return arr;
}

// 테스트 코드
console.log(range(1, 10, 3));


/*
배열에서 특정 값을 찾으려면 indexOf 메소드를 사용하면 됩니다. array.indexOf(item)을 하면 array 배열에 item이 포함되어 있는지 확인할 수 있습니다.

만약 포함되어 있다면, item이 있는 인덱스가 리턴됩니다.
포함되어 있지 않다면, -1이 리턴됩니다.
여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴됩니다.

*/

let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.indexOf('Kakao'));
console.log(brands.indexOf('Daum'));

// 결과 : 1  -1

/*
그리고 비슷하게 lastIndexOf라는 메소드가 있는데요.indexOf와는 반대로 탐색을 뒤에서 부터 하게 됩니다.
그러니깐 방금과 같은 경우에 'Kakao'를 lastIndexOf 메소드로 찾게 되면 마지막에 있는 인덱스가 리턴되겠죠 ?


indexOf/lastIndexOf는 특정 값을 찾아서 해당 값의 index를 알려줍니다.
하지만, 때로는 그냥 그 값이 배열안에 있는지, 그 여부만 확인하고 싶을 수도 있는데요. 그럴때는 includes 라는 메소드를 활용하면 됩니다.

array.includes(item)을 하게되면 array배열에 item이 있을 경우 true를, 없을 경우 false를 리턴합니다.
*/

let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.includes('Kakao'));
// 결과 : true

//reverse라는 메소드를 활용하면, 배열의 순서를 뒤집을 수도 있습니다.

let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands);
brands.reverse();
console.log(brands);

//(4) ["Google", "Kakao", "Naver", "Kakao"]
// (4)["Kakao", "Naver", "Kakao", "Google"]