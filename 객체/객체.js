// 객체 (Object)
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

// 점 표기법 (objectName.propertyName)
console.log(hyewon.bornYear);
console.log(hyewon.whatSheLikes.hobby);

// 대괄호 표기법 (objectName['propertyName'])
console.log(hyewon['na me'])

let propertyName = 'bornYear';
console.log(hyewon[propertyName]); // 존재하지 않는 property 에 접근하려 하면, 에러가 나는 것이 아니라 'undefied' 출력

// 변수의 값 재할당
console.log(hyewon.whatSheLikes.hobby);
hyewon.whatSheLikes.hobby = 'riding bicycle'
console.log(hyewon.whatSheLikes.hobby);

// 변수 값 삭제
console.log(hyewon.whatSheLikes.hobby);
delete hyewon.whatSheLikes.hobby;
console.log(hyewon.whatSheLikes.hobby);

// 객체가 해당 값 있는지 확인하기 위해 불린값으로 출력
console.log(hyewon.bornYear != undefined);
console.log('bornYear' in codeit);