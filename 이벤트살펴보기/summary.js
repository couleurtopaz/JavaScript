/*

1.  이벤트 핸들러 등록하기
html의 속성이나 dom 프로퍼티를 활용해 이벤트를 등록하는 방법 외에, Element.addListener('type', 'handler')를
통해서 이벤트 핸들러를 등록할 수 있다.

2. 이벤트 핸들러 삭제하기
addEventListener 메소드를 활용하여 이벤트 핸들러를 등록했다면, Element.removeEventListener('type', 'handler')
를 통해서 이벤트 핸들러를 삭제 할 수 있다.

3. 이벤트 객체 (Event Object)
이벤트가 발생하면 이벤트 핸들러의 첫 번째 파라미터에는 자동으로 이벤트 객체가 전달된다.
이벤트 객체는 이벤트 종류마다 가지고 있는 프로퍼티가 다르며, 이벤트에 대한 유용한 정보들을 프로퍼티로 가지고 있다.

4. 이벤트 버블링
이벤트는 전파가 된다. 어떤 요소에서 이벤트가 발생하면 해당 요소에 등록된 이벤트 핸들러가 동작하는 것뿐만 아니라, 부모요소로 이벤트가
계속해서 전파되면서 각 요소에도 등록된 이벤트 핸들러가 있다면 차례로 이벤트 핸들러가 동작함.

자식 요소에서 부모 요소로 이벤트가 전파 되는 것을 '이벤트 버블링' 이라고 부른다.
이벤트 버블링은 이벤트 객체의 stopPropagation 메소드로 전파를 막을 수 있다.

5. 이벤트 위임
버블링 개념을 활용하면 훨씬 효과적으로 이벤트 관리를 할 수 있다. 자식 요소 각각에 이벤트 핸들러를 하나씩 등록할 필요 없이 부모요소에서 한번에 자식요소들에 발생한 이벤트를 관리 가능
이벤트 다루는 방식을 자식 요소의 이벤트를 부모요소에 위임

6. 브라우저의 기본 동작
브라우저에는 각 태그별 혹은 상호아별로 기본적으로 약속된 동작들이 있다.
이런 동작을 막고싶다면 이벤트 객체의 preventDefaullt 메소드를 통해 막을 수 있다.
하지만 html 태그들이 가지고 있는 고유한 역할과 의미를 훼손할 수 있으므로 꼭 필요한 경우에만 주의하여 사용해야한다.


*/