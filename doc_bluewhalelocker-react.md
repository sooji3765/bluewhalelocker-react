
### 디렉토리
~~~
public
  img : 정적 이미지 파일들
  style : 스타일 파일들
  thema : UI 디자인, react 구성한 UI/UX에서 참고한 예
src
  lib
    components : 컴포넌트들
    containers : 컨테이너들
    pages : 라우팅 페이지들
    store : 설정 파일들
    info : 정보 파일들
~~~

### components

### Reference

##### react
* React 개발 구조
~~~
https://velog.io/@killi8n/3-2.-React-개발-환경-설정-및-구조-잡기.프로젝트-구조잡기-7cjmbjpr9h
~~~

##### google maps
~~~
https://www.npmjs.com/package/google-maps-react
https://codesandbox.io/s/x3xxjr7r04
~~~

##### jQuery
* jQuery
~~~
http://www.devkuma.com/books/pages/167
~~~

##### style
* 다양한 방식의 리액트 컴포넌트 스타일링 방식 CSS, Sass, CSS Module, styled-components
~~~
https://velog.io/@velopert/react-component-styling
yarn add node-sass
yarn add open-color include-media 
yarn add classnames
yarn add styled-components
~~~

### router
* 리액트 라우터 사용해보기
~~~
https://velopert.com/3417
yarn add query-string
yarn add react-router-dom
yarn add cross-env --dev
~~~

### 리액트 커스텀 환경변수 설정하기
* .env
* 리액트에선 반디시 REACT_APP_  로 시작되야 함
~~~
http://lemonja.blogspot.com/2018/08/reactjs-cra.html
~~~

### eoa, ca
~~~
https://steemit.com/kr/@yahweh87/eoa
~~~

### 디버깅 모드 실행
index.js 에서 ./Root 를 ./RootDebut로 교체후, 시작하면,
왼쪽에는 지갑정보 및 기타 정보가 보여지고, 오른편에 붙은 화면을 볼수 있습니다.
~~~
import Root from './Root';
부분을
import Root from './RootDebug';
로 교체
~~~
