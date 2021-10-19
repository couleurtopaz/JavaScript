const devices = [
    { name: 'GalaxyNote', brand: 'Samsung' },
    { name: 'MacbookPro', brand: 'Apple' },
    { name: 'iPad', brand: 'Apple' },
    { name: 'iMac', brand: 'Samsung' },
    { name: 'Gram', brand: 'Apple' },
    { name: 'GalaxyBuds', brand: 'Samsung' },
    { name: 'Gram', brand: 'LG' },
    { name: 'GalaxyBook', brand: 'Samsung' },
    { name: 'SurfacePro', brand: 'Microsoft' },
    { name: 'ZenBook', brand: 'Asus' },
    { name: 'MacbookAir', brand: 'Apple' },
];

const apples = devices.filter((el, i) => {
    console.log(i);
    return el.brand === 'Apple';
});

console.log(apples);

const myLaptop = devices.find((el, i) => {
    console.log(i);
    return el.brand === 'Apple';
});

console.log(myLaptop);

/*
filter find : 배열의 특정 값 찾기
find() : 조건에 맞는 값 중 첫번째 값 리턴 만족하는 값 없으면 undefined
filter() : 특정 조건에 부합하는 배열의 모든 값을 배열 형태로 리턴

0 // filter
1
2
3
4
5
6
7
8
9
10
(4) {~~}
0
1 // 제일 첫번 째 꺼 find
*/