import React, { useEffect } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
// import { response } from 'express';

function LandingPage(props) {

    useEffect(() => {
        axios.get('/api/hello') //서버로 보낸다.
        .then(response => console.log(response.data))
    }, [])

    const onClickHandler = () => {
        axios.get('/api/users/logout')
            .then(response => {
                if(response.data.success) {
                    props.history.push("/login")
                } else {
                    alert('로그아웃 실패')
                }
        })
    }    


    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            ,width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>
            <button onClick={onClickHandler}>로그아웃</button>
        </div>
    )
}

export default withRouter(LandingPage)