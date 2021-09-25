// String
let myString = ' Hi Codeit ';

// 요소 접근
console.log(myString[3]); // 대괄호 표기법
console.log(myString.charAt(3)); // charAt 메소드

// 요소 탐색
console.log(myString.indexOf('i')); // 앞 부터
console.log(myString.lastIndexOf('i')); // 뒤 부터
console.log(myString.indexOf('a')); // 없는 문자열 찾을 시, -1 출력

// 문자열 길이
console.log(myString.length);

// 대소문자 변환
console.log(myString.toUpperCase()) // 대문자
console.log(myString.toLowerCase()) // 소문자

// 양 끝 공백 제거
console.log(myString.trim());

// 부분 문자열 접근 Slice(start, end)
console.log(myString.slice(0, 3)); // 시작 지점부터 끝지점 직전까지. 즉 0 ~ 2번 인덱스까지
console.log(myString.slice(3)); // 시작 지점부터 끝까지
console.log(myString.slice()); // 문자열 전체 출력