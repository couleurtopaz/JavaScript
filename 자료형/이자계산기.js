/*
이자율(rate), 매월 납입 금액(payment), 납입 기간(term)을 파라미터로 전달하면, 만기 후 받게 될 이자를 출력해주는 interestCalculator 함수를 완성해 보세요.

n = 납입 개월 수
r = 이자율
v = 월 납입금
일 때, interest = v * n * (n+1) / 2 * r / 12

*/

function interestCalculator(r, v, n) {
    console.log(+(v * n * (n + 1) / 2 * r / 12).toFixed(1)); 
}
//toFixed 메소드를 활용하면, 문자열이 리턴되기 때문에 숫자 값이 필요하다면 반드시 숫자형으로 형변환 해야한다. (+ 붙이면 형변환 된다)


// 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
interestCalculator(0.043, 800000, 24);

// 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우
interestCalculator(0.043, 600000, 24);

// 결과
//860000
//645000