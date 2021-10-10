// user 객체 안에서 메소드를 만들때, 간결한 표현을 위해서 Arrow Function 으로 작성. 근데 이 메소드는 이름이 없어서
// 호출 불가. Arrow Function은 반드시 이름이 필요함.
// 그래서 일반적으로 객체의 메소드를 만들때는, Arrow Function 보다는 일반함수가 더 권장된다.
/*
const user = {
    name: 'codeit',
    birth: 2017,
  () => {
    const date = new Date();
    return date.getFullYear() - this.birth + 1;
},
};
*/

const user = {
    name: 'Hyewon',
    birth: 1994,
    getAge: () => {
        const date = new Date();
        return date.getFullYear() - this.birth + 1;
    },
};


// -------------------------

const propertyName = 'birth';
const getJob = () => 'job';

const hyewone = {
    ['topic' + 'name']: 'Modern JS',
    [propertyName]: 2015,
    [getJob()]: '무직',
};

// 프로퍼티에 접근 하는 방법
hyewone.topicname;
hyewon[propertyName];
hyewone[getJob()];
hyewone.job;
hyewone.birth;
// hyewone.propertyName; -> 이건 불가하다.