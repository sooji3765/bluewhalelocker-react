
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

## 2019-09-07 반영
### 개발우선순위 배정
* 개발우선순위 : 1 => 빠른시간내에 해야 되는것,
* 개발우선순위 : 2 => 적당히 업무에 맞추어 개발해야되는것,
* 개발우선순위 : 3 => 늦게 해도 괜찮지만, 해야 되는것, 하지만, 시현 시나리오에 포함 안될수도 있는것
* 개발우선순위 : 4 => 깔끔하게 하기위해선 해야되지만, 없어도 서비스엔 문제없는것,

### 로그인 상태 유지
* 로그인 상태 또는 기타 문제로, 화면 에러 계속 발생시, Application 의 Storage 정보 제거
  - Chrome F12 > Application > Storage
    * local Storage, session Storage 의 Key 값제거
  - Local Storage
    * rememberMe : 로그인화면에서 id 기억 정보
  - Session Storage
    * bwlProfile : 마지막 이동한 화면의 정보까지 적재되있음

## 2019-09-05 반영
### Router path 방식에서 Redux & Redux 방식으로 교체
* 단순 Component 전환은 handleUpdateState 사용
* Commponent 전환 : selectComponent 소스검색
~~~
* 기존코드
<Route path="/usersetting" component={UsersettingPage} />

* 신규코드
  handleRouterUsersetting = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'UsersettingComponent'});
  }

render 부분
  <a href="/usersetting" onClick={(e) => this.handleRouterUsersetting(e)}>Setting</a>
~~~

### 로그인같은 어떤 값전달이 필요할때에는 아래와 같은 식으로 코딩
~~~
    handleSignIn = (e) => {
        e.preventDefault();

        const form = BwlUtil.findParentForm(e.target);

        if (form) {
            const item = BwlUtil.getFormData(e, form);
            this.props.handleSignIn({props: this.props, e, item});
        } else {
            console.log('not found form tag');
        }
    };
~~~

### 명령어 처리 루틴
로그인, 등록, 수정 같은 명령어 처리는 ./lib/store/밑으
~~~
DefaultUpdater.js : /ib/component/default 에서 이루어지는 이벤트 모음
LockerUpdater.js : /ib/component/locker 에서 이루어지는 이벤트 모음
UserUpdater.js : /ib/component/user 에서 이루어지는 이벤트 모음
{폴더명}Updater.js : /ib/component/{폴더명} 에서 이루어지는 이벤트 모음
~~~

### Redux & Redux 교체하면서 Link 콤포넌트 에러나는것 해결위해 a 태그로 교체
~~~
* 기존코드
  <Link ></Link>


* 신규코드
  <a onClick={(e) => this.handleRouterUsersetting(e)}>Setting</a>
~~~

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
