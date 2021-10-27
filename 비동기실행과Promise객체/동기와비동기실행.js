console.log('Start!');

fetch('https://www.google.com')
    .then((response) => response.text())
    .then((result) => { console.log(result); });

console.log('End');

/*

두 개의 콜백
- (response) -> response.text()
- (result) -> {console.log(result)}

(비동기)
비동기 실행 : 특정 작업을 시작하고 완벽하게 처리 하기 전에, 실행 흐름이 바로 다음 코드로 넘어가고, 나중에 콜백이 실행되는 것
1. console.log('start');
2. fetch 함수 (리퀘스트 보내기 및 콜백 등록)
3. console.log('End');
4. 리스폰스가 오면 2에서 then 메소드로 등록해뒀던 콜백 실행

(동기)
동기 실행 : 한번 시작한 작업은 다 처리하고 나서야 다음 코드로 넘어가는 실행
1. console.log('Start');
2. fetch 함수 (리퀘스트)
3. 리스폰스가 올 때까지 코드 실행이 잠시 '정지'되고, 리스폰스가 오면 필요한 처리 실행
4. console.log('End');

비동기 실행이 동기실행에 비해 동일한 작업을 더 빠른 시간 내에 처리 할 수 있다.
동기 실행에서는 모든 작업이 순차적으로 수행되고 있다. 반면, 비동기 실행에서는 리스폰스를 기다리는 시간 동안 그 이후의 작업을 미리 처리


*/