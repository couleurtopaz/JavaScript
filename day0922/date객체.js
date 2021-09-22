// Date
let myDate = new Date();
console.log(myDate);

// new Date('YYYY-MM-DD') 
// new Date(year, month, date ...) 여기서 주의할 점은 month만 시작이 0 -> 3 이면 4월
// 타임스탬프 : myDate 객체가 70년 1월 1일 00:00:00 부터 몇 밀리초 지났는지

/*
문득, 그동안 고생한 지난날이 머릿속을 스쳐지나면서 자신이 입사한 지 얼마나 지났는지도 궁금해졌는데요.오늘은 날짜는 2112년 8월 24일이고, 재상이의 입사일은 2109년 7월 1일입니다.Date객체와 메소드를 활용해서 재상이가 입사한 지 며칠째인지를 계산해주는 workDayCalc 함수를 완성해 주세요.
*/

let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

function workDayCalc(startDate) {
    let timeDiff = today.getTime() - startDate.getTime();
    let dayDiff = timeDiff / 1000 / 60 / 60 / 24;

    console.log(`오늘은 입사한 지 ${dayDiff + 1}일째 되는 날 입니다.`);


}

workDayCalc(jaeSangStart);

// 실행 결과 : 오늘은 입사한 지 1151일째 되는 날 입니다.