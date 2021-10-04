// window : 전역 객체 (Global Object) 모든 내장 함수들이 포함되어있다.
console.log(window);

// DOM : 웹 페이지에 나타나는 html문서 전체를 객체로 표현
console.log(document) // 태그 형태
console.dir(document) // 객체 형태

/*
console vs dir

1. 출력하는 자료형이 다르다.
dir 메소드는 문자열 표시 형식으로 콘솔에 출력한다.

2. log는 값 자체에, dir은 객체의 속성에 !
log메소드는 파라미터로 전달받은 값을 위주로 html형태로 출력하는 반면, dir 메소드는 객체의 속성을 좀 더 자세하게 출력한다.

3. log는 여러개, dir은 하나만 !

*/
