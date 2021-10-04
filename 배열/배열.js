// 배열 (Array)
let courseRanking = [
    '자바스크립트 프로그래밍 기초',
    'Git으로 배우는 버전 관리',
    '컴퓨터 개론',
    '파이썬 프로그래밍 기초',
    'Python'
]

// index == PropertyName indexing (0~ ..)
//console.log(배열이름[index]);
console.log(courseRanking.length);
console.log(courseRanking['length']);
console.log(courseRanking[courseRanking.length - 1]);

delete courseRanking[3];

// splice(startIndex, deleteCount, item) 삭제를 시작할 인덱스부터 삭제할 갯수 그리고 그 뒤에 값 추가 가능하다.
courseRanking.splice(1, 2, '혜원', '혜원짱');
console.log(courseRanking)
courseRanking.splice(2, 0, '배고파'); // deletecount를 0으로 하면 삭제되지 않고, 값 수정만 할 수 있다