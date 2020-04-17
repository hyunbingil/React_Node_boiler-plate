const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

userSchema.pre('save', function(next){
    // 비밀번호를 암호화 시킨다.
    var user = this; // 5번째 줄 부터 34번째 줄까지.

    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, function(err, salt) {
            // salt 만들기
            if(err) return next(err)
            bcrypt.hash(user.password, salt, function(err, hash) {
                // Store hash in your password DB.
                // user.password = plain password
                if(err) return next(err)
                user.password = hash
                next()
            });
        });
    } else {
        next()
    }
}) // 'save'하기 전에 무언가를 한다. mongoose에서 가져온 method인 pre

userSchema.methods.comparePassword = function(plainPassword, cb) {
    //plainPassword 1234567 암호화된 비밀번호 ~~~~가 같은지 비교하려면 plainPassword를 암호화한 후에 비교한다.
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return cb(err),
            cb(null, isMatch)

    })

}

const User = mongoose.model('User', userSchema) // 유저이름과, 스키마 넣어주기

module.exports = { User }