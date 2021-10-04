/* for .. in
for (변수 in 객체) {
    동작 부분
}

객체의 property name 이 변수에 할당되고 property 객체의 갯수만큼 할당
*/

let hyewon = {
    'na me': '혜원',
    bornYear: 1994,
    isVeryNice: true,
    boyFriend: null,
    whatSheLikes: {
        hobby: '요리',
        food: 'pizza'
    }
};

for (let key in hyewon) { //key 대신 다른 값을 넣어줘도 가능하다.
    console.log(key);
    console.log(hyewon[key]);
}

/*
정수형 프로퍼티 네임
객체는 정수형 프로퍼티 네임을 오름차순으로 정렬하고, 나머지 프로퍼티들은 추가한 순서대로 정렬하는 특징이 있다.
 */