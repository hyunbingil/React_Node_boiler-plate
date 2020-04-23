const { User } = require('../models/User');

let auth = (req, res, next) => {
    // 인증처리를 하는 곳

    // client 쿠키에서 토큰을 가져온다.
    let token = req.cookies.x_auth;

    // 토큰을 복호화 한 후 user를 찾는다.
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({ isAuth: false, error: true });

        req.token = token;
        req.user = user;
        // request에 token과 user를 넣어주는 이유는 request 받을 때
        // index.js에서 req.user, req.token을 입력했을 때 유저 정보, 토큰을 가질 수 있기 때문.
        next(); // middleware에서 빠져나올 수 있도록 해준다.
    })
    // user가 있으면 인증 O

    // user가 없으면 인증 X
}

module.exports = { auth };