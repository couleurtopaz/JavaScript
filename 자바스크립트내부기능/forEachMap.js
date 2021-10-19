const members = ['영훈', '윤수', '동욱', '신형'];

for (let member of members) {
    console.log(`${member}님이 입장하셨습니다.`);
}

members.forEach((member, index) => { // 보통 index를 i 로 많이 줄여쓴다.
    console.log(`${index} ${member}님이 입장하셨습니다.`);
});


// -----

const firstNames = ['영훈', '윤수', '동욱', '신형'];
const lastNames = ['강', '이', '손', '박'];

firstNames.forEach((firstName, i, arr) => {
    console.log(`${lastNames[i]}${firstName}님이 입장하셨습니다.`);
    console.log(arr); // 배열 출력
})


// 배열값 자체에 for each 문 가능!

['영훈', '윤수', '동욱', '신형'].forEach((firstName, i, arr) => {
    console.log(`${lastNames[i]}${firstName}님이 입장하셨습니다.`);
    console.log(arr); // 배열 출력
});

// map

const fullNames = firstNames.map((firstName, i) => {
    return lastNames[i] + firstName;
});

console.log(fullNames);

// 배열의 반복 작업이 필요할때 -> for each , 반복작업을 통해 새로운 배열이 필요한 경우 -> map