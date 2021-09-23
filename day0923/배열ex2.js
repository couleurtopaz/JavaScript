/*
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];

// F: 화씨(fahrenheit), C: 섭씨(celsius)
F = (C * 9 / 5) + 32;

celsius 배열의 각 요소들을 화씨로 변환한 값을 fahrenheit 배열에 추가해 주세요.
*/

let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

let i = 0;
while (i <= 6) {
    fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5) + 32;
    i++;
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);

/*
실행 결과 : 
[
  80.6,   77, 78.8,
  71.6, 82.4, 80.6,
  69.8
]
*/