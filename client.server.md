## Client와 Server가 통신하는 법
> Chrome 브라우저가 Client, Server 부분은 우리가 index.js로 만들고 있는 부분!

: Client를 이용해서 정보를 작성해서 전송하면, 서버에서 그 정보를 받아야하는데, 그 때 필요한 것이 있다.
#### 1. Body-parser Dependency 설치
```
npm install body-parser --save
```
#### 2. POST MAN 설치
: 로그인을 하거나, 회원가입을 할 때 Client를 만들어둔 것이 없으니, 데이터를 Client에 보내줄 수 없으니까 그것을 대처하기 위해서 다운받는다.

#### 3. Register Route 만들기
