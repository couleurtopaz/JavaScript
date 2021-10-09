const getObject = function (a, b, c) {
    return { 0: a, 1: b, 3: c };
}

// Arrow Function 으로 바꾸면 ?
const getObject = (a, b, c) => ({ 0: a, 1: b, 3: c });

/*
- Parameter 가 하나일 때는, 파라미터를 감싸는 소괄호를 생략할 수 있다. 두개 이상일 때는 생략 불가.
- 함수 내부의 동작 코드가 return 문 하나일때는 중괄호와 return 키워드를 생략 가능 -> 이럴경우 소괄호로 한 번 더 감싸 주어야한다.
- 화살표 함수는 기존의 함수 선언 방식으로 좀 더 간결하게 만들어주는 문법
- rest parameter 를 사용한다거나 파라미터의 기본값을 설정할 수 있다.
- 하지만 arguments 객체가 없어서 예외적으로 arguments 객체를 활용하는 함수는 화살표 함수로 변환하기 힘들다.
- 모든 화살표 함수는 익명함수라서 변수에 할당하거나 다른 함수를 호출할 때, 아규먼트로 사용된다.

*/
 