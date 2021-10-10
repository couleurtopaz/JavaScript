const macbook = {
    title: '맥북 프로 16형',
    price: 3690000,
    memory: '16GB',
    storage: '1TB SSD 저장장치',
    display: '16형 Retina 디스플레이',
};

// const title = macbook.title;
// const price = macbook.price;

const { title, price } = macbook; // 객체를 분해할때는, 중괄호로 감싸서 !
const { title, color = 'silver' } = macbook;
const { title, ...rest } = macbook;
const { title: product, ...rest } = macbook;

console.log(title);
console.log(price);
console.log(rest);
console.log(product);

const propertyName = 'title';
const { [propertyName]: product } = macbook;

console.log(product);

// -----------------------------

const macbook = {
    title: '맥북 프로 16형',
    price: 3690000,
    memory: '16GB',
    storage: '1TB SSD 저장장치',
    display: '16형 Retina 디스플레이',
};

function printSummary({title, color, price}) {
    console.log(`선택한 상품은 ${title} 입니다`);
    console.log(`색상은 ${color}이며,`);
    console.log(`가격은 ${price}원 입니다.`);
}

printSummary(macbook);

// 선택한 상품은 맥북 프로 16형입니다
// 색상은 silver이며,
// 가격은 3690000원 입니다


// ----------------------------

const btn = document.querySelector('#btn');

// btn.addEventListener('click', (event) => {
//     event.target.classList.toggle('checked');
// });

btn.addEventListener('click', ({target}) => {
    target.classList.toggle('checked');
});

// 중첩된거는 콜론 기호를 가지고 한 번 더 분해 가능하다.

btn.addEventListener('click', ({ target: {classList} }) => {
    classList.toggle('checked');
});