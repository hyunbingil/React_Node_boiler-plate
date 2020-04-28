## Login 페이지 만들기
: 현재 Boiler Plate는 로그인과 회원 가입 부분을 Formik과 Yup이라는 라이브러리를 사용해서 좀 더 다이나믹하게 만들었다.\
=> but, 기초 강의에서 이용하기에는 적절치 않다고 생각해 기본 기능을 가진 로그인 페이지를 만들어보자!
> redux까지 사용하기 때문에 더 복잡해지니...

<img src='/img/login.PNG'>

### State 설정하기(Hooks)
: value에 state을 넣어주어야한다.
- state 초기값
``` js
const [Email, setEmail] = useState("")
const [Password, setPassword] = useState("")
```
- value에 넣어주기
``` js
<input type="email" value={Email} />
```
- state 변경 시 event만들어 주기
``` js
const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value)
}
```
- onChange에 넣어주기
``` js
<input type="email" value={Email} onChange={onEmailHandler} />
```

### submit
: form에 onSubmit 넣어주기
``` js
<form style={{ display: "flex", flexDirection: "column" }} onSubmit={onSubmitHandler}
>
```
- preventDefault()
: refresh 방지
> 뒤에 동작 할 수 있도록 한다.
``` js
const onSubmitHandler = (e) => {
    e.preventDefault();
}
```
- 서버로 보내기
``` js
const onSubmitHandler = (e) => {
    e.preventDefault();
        
    let body = {
        email: Email,
        password: Password,
    }

    Axios.post('/api/user/login', body)
    .then(response => {

    }) // 서버로 보내기
}
```

### redux 사용하기
#### 1. dispatch하기
``` js
const onSubmitHandler = (e) => {
    e.preventDefault();
    
    let body = {
        email: Email,
        password: Password,
    }
    dispatch(loginUser(body))
}
```
#### 2. action 설정하기
``` js
import axios from 'axios';

export function loginUser(dataTosubmit) {
    const request = axios.post('/api/user/login', body)
        .then(response => { response.data }) // 서버로 보내기

    return {
        type: "LOGIN_USER",
        payload: request
    }
}
```
#### 3. reducer 설정하기
: switch 문법 이용해서 type에 따라 나누어주기
``` js
import { LOGIN_USER } from '../_actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            // break;
    
        default:
            return state;
    }
}
```

### 🍯꿀팁
#### 페이지간의 이동 설정하기
``` js
if(response.payload.loginSuccess) {
    props.history.push('/') // 메인 페이지로 이동
} else {
     alert("로그인이 되지 않았습니다.")
}
```            

