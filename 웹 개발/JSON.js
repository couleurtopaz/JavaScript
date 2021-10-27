fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.text())
    .then((result) => {
        const users = JSON.parse(result) // parse -> 스트링 타입의 객체를 자바스크립트의 배열로 변환
        console.log(users.length);
        users.forEach((user) => { // for each 배열의 각 요소를 순회하면서, 매번 파라미터로 받은 함수를 실행
            console.log(user.name)
        });
    }); 


/*

Serialization (직렬화) : 자바스크립트 객체 -> string 타입의 JSON 데이터로 변환 - stringify

Deserialization (역직렬화) : string 타입의 JSON 데이터를 자바스크립트 객체로 변환하는 것 - parse


*/

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((result) => { const users = result; });
    // text메소드 대신 json메소드 호출하면 리스폰스의 내용이 JSON 데이터에 해당하는 경우 역직렬화까지 수행해준다. 