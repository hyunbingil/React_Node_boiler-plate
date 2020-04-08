const express = require('express') // express 모듈 가져오기
const app = express() // 새로운 express 앱을 만든다.
const port = 5000 // 포트 설정

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hyunbingil:<password>@hyunbingil-cveab.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected...')) // 에러가 안뜨게 하기위해 써준다!
  .catch(err => console.log(err))
app.get('/', (req, res) => res.send('Hello World!')) // hello world 출력

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))