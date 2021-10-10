/*
finally 문은 try catch 문이 끝난 다음 최종적으로 실행될 코드
try 문에서 어떤 코드를 실행할때 에러 여부와 상관없이 항상 실행할 코드를 작성

try {
    실행할 코드
} catch (err) {
    // 에러가 발생했을 때 실행할 코드
} finally {
    // 항상 실행할 코드
}

*/

function printMembers(...members) {
    for (const member of members) {
        console.log(member);
    }
}

try {
    printMembers('영훈', '윤수', '동욱');
} catch (err) {
    alert('에러가 발생했습니다.');
    console.error(err);
} finally {
    const end = new Date();
    const msg = `코드 실행을 완료한 시각은 ${end.toLocaleString()}입니다.`;
    console.log(msg);
}

// finally 문에서의 에러처리는? try catch 문을 중첩해서 활용 

try {
    try {
        // 실행할 코드
    } catch (err) {
        // 에러가 발상했을 때 실행할 코드
    } finally {
        // 항상 실행할 코드
    }
} catch (err) {
    // finall문에서 에러가 발생했을 때 실행할 코드
}