// 배열의 각 요소를 대상으로 반복적으로 간단히 출력할때 for of
/*
for (변수 of 배열) {
    동작부분;
}
*/

let fruits = ['banana', 'strawberry', 'grapes', 'mango', 'kiwi']

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for (let element of fruits) {
    console.log(element)
}

