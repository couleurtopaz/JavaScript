fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.text())
    .then((result) => {
        const users = JSON.parse(result) // parse -> 스트링 타입의 객체를 자바스크립트의 배열로 변환
        console.log(users.length);
        users.forEach((user) => { // for each 배열의 각 요소를 순회하면서, 매번 파라미터로 받은 함수를 실행
            console.log(user.name)
        });
    }); 

