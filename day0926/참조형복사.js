// 참조형 복사하기
let numbers1 = [1, 2, 3];
// let numbers2 = numbers1; -> 이럴 경우 결과값 [1,2,3,4]
let numbers2 = numbers1.slice(); // -> 이럴경우 numbers1 -> [1, 2 , 3]


numbers2.push(4);

console.log(numbers1);
console.log(numbers2);


function cloneObject(object) {
    let temp = {};

    for (let key in object) {
        temp[key] = object[key];
    }

    return temp;
};


let course1 = {
    title: '파이썬 프로그래밍 기초',
    language: 'Python'
};

let course2 = cloneObject(course1);
let course3 = cloneObject(course1);

course2.title = '알고리즘의 정석';

console.log(course1);
console.log(course2);
