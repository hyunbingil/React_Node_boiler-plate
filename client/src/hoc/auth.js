import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {
    // SpecificComponent는 감싸준 component
    // option에서 null은 아무나 출입이 가능한 페이지
    // true는 로그인한 유저만 출입 가능 페이지
    // false는 로그인한 유저는 출입이 불가능한 페이지.

    // adminRoute가 true면 관리자만 출입이 가능. 안써준다면 null로 상관없다!
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth()).then(response => {
                console.log(response)

                // 로그인 하지 않은 상태
                if(!response.payload.isAuth) {
                    if(option) {
                        props.history.push('/login')
                    }
                } else {
                    // 로그인 한 상태
                    if(adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    } else {
                        if(option === false)
                        props.history.push('/')
                    }
                }
            })

        }, [])

        return(
            <SpecificComponent />
        )

    }
    return AuthenticationCheck
}