/*
자격증 합격 기준은 총점이 60점 이상인데요.

파라미터로 객체를 전달받고, 각 과목들의 점수를 모두 합산해서 시험 결과를 알려주는 passChecker 함수를 완성해 주세요!
합격 기준을 충족할 경우 '축하합니다! 합격입니다!' 라는 문자열을, 충족하지 못할 경우 '아쉽지만 불합격 입니다..'라는 문자열을 출력해야 합니다.

*/

let hyesoonScore = {
    '데이터 모델링의 이해': 10,
    '데이터 모델과 성능': 8,
    'SQL 기본': 22,
    'SQL 활용': 18,
    'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
    '데이터 모델링의 이해': 14,
    '데이터 모델과 성능': 8,
    'SQL 기본': 12,
    'SQL 활용': 4,
    'SQL 최적화 기본 원리': 16,
};

function passChecker(scoreObject) {
    let totalScore = 0;

    for (let key in scoreObject) {
        totalScore += scoreObject[key];
    }

    if (totalScore > 60) {
        console.log('축하합니다! 합격입니다!')
    } else {
        console.log('아쉽지만 불합격입니다..')
    }

}

passChecker(hyesoonScore);
passChecker(minsoonScore);

/*
출력 결과
축하합니다! 합격입니다!
아쉽지만 불합격입니다..
*/