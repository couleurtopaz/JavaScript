let courseRanking = [
    '자바스크립트 프로그래밍 기초',
    'Git으로 배우는 버전 관리',
    '컴퓨터 개론',
    '파이썬 프로그래밍 기초',
    'Python'
]

// 배열의 첫 요소를 삭제: shift()
courseRanking.shift();
console.log(courseRanking);

// 배열의 마지막 요소를 삭제 : pop()
courseRanking.pop();
console.log(courseRanking);

// 배열의 첫 요소로 값 추가 : unshift(value)
courseRanking.unshift('리액트');
console.log(courseRanking);

// 배열의 마지막 요소로 값 추가 : push(value)
courseRanking.push('linux 기초');
console.log(courseRanking);

