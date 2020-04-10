const express = require('express') // express 모듈 가져오기
const app = express() // 새로운 express 앱을 만든다.
const port = 5000 // 포트 설정
const bodyParser = require('body-parser');

// bodyParser가 client에서 오는 정보를 서버에서 분석해서 가져올 수 있게 하는 것이라고 했는데,
// 이 부분은 appliation/x-www-form-urlencoded 으로 되어있는 데이터를 분석해서 가져올 수 있게 하주기 위한 조건
app.use(bodyParser.urlencoded({extended: true}));
// 이 부분은 appliation/json 으로 되어있는 데이터를 분석해서 가져올 수 있게 하주기 위한 조건
app.use(bodyParser.json());

const { User } = require('./models/User');

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hyunbingil:<password>@hyunbingil-cveab.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected...')) // 에러가 안뜨게 하기위해 써준다!
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!')) // hello world 출력하는 get을 이용한 route

app.post('/register', (req, res) => {
  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면, 그것들을 데이터 베이스에 ㄴ허어준다.

    const user = new User(req.body)
    // request body안에 정보들이 들어있는 것.
    // bodyParser가 있기 때문에 여기 들어 있을 수 있음.
    
    user.save((err, doc) => {
      if(err) return res.json({success: false, err}) // json 형식으로 에러 전달.
      return res.status(200).json({
        success: true
      }) // 성공했다는 뜻
    } // mongo DB 메소드
    )}
) // callback function인 req, res


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))