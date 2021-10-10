const title = 'HYE';
const birth = '1994';
const job = '무직';

const user = {
    title: title,
    birth: birth,
    job: job,
};

// 변수와 프로퍼티의 이름이 같을때 이렇게 표현 가능 !

const title = 'HYE';
const birth = '1994';
const job = '무직';

const user = {
    title,
    birth,
    job,
};

console.lo(user);

//----------------

// 객체내부에서 함수를 선언할 때 , :과 function 생략 가능

const user = {
    firstName: 'Hyewon',
    lastName: 'Shin',
    getFullName() {  // < -  getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(user.getFullName());


// -----------------
// 계산된 속성명 
const user = {
    [표현식]: 값,
};


const user = {
    ['HYE' + 'WON']: 'value',
};
console.log(user); // {HYEWON: "value"}


// ------------------

const propertyName = 'birth';
const getJob = () => 'job';

const hyewon = {
    ['topic' + 'Name']: 'Modern Javascript',
    [propertyName]: 2011,
    [getJob()]: '백수',
};

console.log(hyewon);
// {topicName: "Modern Javascript", birth: 2011, job: "백수"}

