
// GET request
fetch('https:"//learn.codeit.kr/api/members/3') // get
    .then((response) => response.text())
    .then((result) => { console.log(result); });



// POST request
const newMember = {
    name: 'Jerry',
    email: 'jerry@codeitmall.kr',
    department: 'engineering'
};

fetch('https:"//learn.codeit.kr/api/members/3', {
    method: 'POST',
    body: JSON.stringify(newMember),  // stringifty : 자바스트립객체를 외부로 전송하고 싶을때, 스트링 타입의 제이슨 형태로 변환.
})
    .then((response) => response.text())
    .then((result) => { console.log(result); });


// PUT request
const member = {
    name: 'Alice',
    email: 'alice@codeitmall.kr',
    department: 'marketing'
};

fetch('https:"//learn.codeit.kr/api/members/3', {
    method: 'PUT',
    body: JSON.stringify(member),  
})
    .then((response) => response.text())
    .then((result) => { console.log(result); });


// DELETE request 
const member = {
    name: 'Alice',
    email: 'alice@codeitmall.kr',
    department: 'marketing'
};

fetch('https:"//learn.codeit.kr/api/members/2', {
    method: 'DELETE', // 굳이 바디가 필요 없음.
})
    .then((response) => response.text())
    .then((result) => { console.log(result); });