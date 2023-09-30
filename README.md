## 개요
> [Udemy - Modern React And Redux](https://www.udemy.com/react-redux/)의 Weather App 예제를 학습한 내용을 기록하는 레포지토리입니다.

## 학습 목표
- Redux가 적용된 환경에서 Ajax로 데이터를 받아오기
- 날씨 데이터를 Chart로 표현해 보기
- 

## 학습 내용 (리덕스 중급과정 - 미들웨어)
### 날씨 어플리케이션 개요
<img width="839" alt="image" src="https://github.com/gyureal/ReduxSimpleStarter/assets/78974381/9c70be90-8b69-4a94-a6be-32c7ddcdb004">


### Search Bar
#### callback에서 state 변경하기
> callback 메서드에서 this 사용하도록 설정하기
 - component 는 state에 의해 controlled 되도록 해야한다.

   <img width="750" alt="image" src="https://github.com/gyureal/ReduxWeatherApp/assets/78974381/d4ef9686-dfb2-4f66-ab70-a8e86bd64f97">


 - callback에서 this 를 사용하면 this가 특정되지 않는다.
   
   <img width="771" alt="image" src="https://github.com/gyureal/ReduxWeatherApp/assets/78974381/f576e447-6e3b-4fd4-b979-d72f320f0602">

   <img width="494" alt="image" src="https://github.com/gyureal/ReduxWeatherApp/assets/78974381/81b9842c-3260-481a-9b20-6a7cc90dd5fc">

- callBack에서 this를 특정하도록 바인딩 해준다. (일종의 메서드 오버라이딩)
  
  <img width="664" alt="image" src="https://github.com/gyureal/ReduxWeatherApp/assets/78974381/df99438f-0616-4714-94ce-31a7df2ca43c">


#### form 제출이 되지 않도록 설정
- form 제출 시 기본으로 HTML form submit이 동작하지만, SPA에서 HTML을 전부 다시 그리는 기본 제출 동작을 원하지 않는다.
- form submit 시, 개발자가 정의한 동작이 이루어지도록 설정해야한다.
> 참고) 기본 HTML Form Submit 을 사용하지 않는다면, form 태그를 사용할 필요가 없지 않은가?
> -> No, 만약 form 태그를 사용하지 않고, input 과 button을 따로 생성한다면, input press Enter 와, button click 이벤트 두가지 다에 이벤트 핸들러를 매핑 해야한다. 하지만 form 으로 만들어 놓는다면, form submit 이벤트에만 이벤트 핸들러를 매핑하면 된다.


### 미들웨어의 역할
<img width="842" alt="image" src="https://github.com/gyureal/ReduxWeatherApp/assets/78974381/ccaf29bd-8c1f-4b31-bb63-b1dab160ba6a">


## Trouble Shooting
### import axios : Cannot use import statement outside a module
참고) https://github.com/axios/axios/issues/5035
해결) axios 최신버전이 아닌 이전 버전을 설치하니 해결되었다.
`npm install axios@0.27.2`
