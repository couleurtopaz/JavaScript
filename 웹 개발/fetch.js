/* fetch 함수 
1. fetch 함수는 어떤 객체를 리턴한다.
2. 이 객체의 then 메소드로, '리스폰스가 왔을 때 실행할 콜백'을 등록할 수 있습니다.
3. 이렇게 등록된 콜백들은 then 메소드로 등록한 순서대로 실행되고, 이때 이전 콜백의 리턴값을 이후 콜백이 넘겨받아서 사용할 수 있다.
*/


fetch('http:"//www.google.com')
    // response -> 리스폰스에 관한 각종 부가 정보 + 실제 내용을 함께 갖고있는 하나의 객체 -> 이를 text메소드로 실제 내용 볼수있음
    .then((response) => response.text()) 
    .then((result) => { console.log(result); }); 