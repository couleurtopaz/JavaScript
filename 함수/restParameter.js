function printRank(first, second, ...others) {
    console.log('레이스 최종 결과');
    console.log(`우승: ${first}`);
    console.log(`준우승: ${second}`);
    for (const arg of others) {
        console.log(`참가자: ${arg}`);
    }
}

printRank('hyewon', 'shin', 'casper', 'kate', 'hye');

/*

출력 결과 :

레이스 최종결과
우승: hyewon
준우승: shin
참가자: casper
참가자: kate
참가자: hye
*/