// 새 직원 정보를 추가한 후에, 전체 직원 정보를 조회하는 코드

const newMember = {
    name: "hyewon",
    email: "couleurtopaz@gmail.com",
    department: "engineer"
};


fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',
    body: JSON.stringify(newMember), // stringify메소드 (Serialization) -> newMember 객체를 string 타입의 JSON 데이터로 변환해서 바디에 넣기
})
    .then(() => {
        fetch('https://learn.codeit.kr/api/members')
            .then((response) => response.text())
            .then((result) => {
                const members = JSON.parse(result) // parse메소드 (Deserialization) -> string 타입의 값을 자바스크립트 객체로 만들기
                console.log(members[members.length - 1]);
            });
    });