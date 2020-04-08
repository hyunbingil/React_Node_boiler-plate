const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // 빈칸을 없애주는 역할
        unique: 1 // 중복 X
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number, // 1이면 관리자 0이면 일반 유저
        default: 0 // 설정 안해줄 경우 0으로 주겠다.
    }, // 유저가 관리자일 수 있고, 일반 유저일 수 있으니까 role을 준다.
    image: String,
    token: {
        type: String
    }, // 유효성 관리
    tokenExp: {
        type: Number
    }// 토큰 사용 기간 설정
})

const User = mongoose.model('User', userSchema) // 유저이름과, 스키마 넣어주기

module.exports = { User }