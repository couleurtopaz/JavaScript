/*
자바스크립트에서 어떤 값을 boolen 타입으로 형변환 했을때,
불린 false 로 평가되는 값 ( falsy ): false, null, undefined, NaN, 0, ''(빈 문자열)
불린 true 로 평가되는 값 (truthy) : 나머지 값들 !


자바스크립트에서 AND 와 OR 연산자는 무조건 불린값을 리턴하는게 아니라, 왼쪽 피연산자 값의 유형에 따라서 두 피연산자 중 하나를 리턴하는 방식으로 동작한다.

AND 연산자
- 왼쪽 피연산자가 falsy -> 왼쪽 피연산자 리턴 
- 왼쪽 피연산자가 truthy -> 오른쪽 오른쪽 피연산자 리턴

OR 연산자
- 왼쪽 피연산자가 falsy -> 오른쪽 피연산자 리턴
- 왼쪽 피연산자가 truthy -> 왼쪽 피연산자 리턴

AND 연산자가 OR 연산자보다 우선순위가 높다
*/


console.log('String' && 123);
console.log({} || []);
console.log(0 && false);
console.log(null || undefined);
console.log(NaN && 'Codeit');
console.log('' || true);
console.log('JavaScript' && null);
console.log(3000 || undefined);

/*
'String' && 123은 AND 연산자의 왼쪽 피연산자가 truthy 값이기 때문에 오른쪽에 있는 123을 출력합니다.
{} || []은 OR 연산자의 왼쪽 피연산자가 truthy 값이기 때문에 그대로 {}을 출력합니다.
0 && false는 AND 연산자의 왼쪽 피연산자가 falsy 값이기 때문에 그대로 0을 출력합니다.
null || undefined는 OR 연산자의 왼쪽 피연산자가 falsy 값이기 때문에 오른쪽에 있는 undefined를 출력합니다.
NaN && 'Codeit'은 AND 연산자의 왼쪽 피연산자가 falsy 값이기 때문에 그대로 NaN을 출력합니다.
'' || true은 OR 연산자의 왼쪽 피연산자가 falsy 값이기 때문에 오른쪽에 있는 true를 출력합니다.
'JavaScript' && null는 AND 연산자의 왼쪽 피연산자가 truthy 값이기 때문에 오른쪽에 있는 null을 출력합니다.
3000 || undefined는 OR 연산자의 왼쪽 피연산자가 truthy 값이기 때문에 그대로 3000을 출력합니다.

*/