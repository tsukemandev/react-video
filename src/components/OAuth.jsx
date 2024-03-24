import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";

import $ from 'jquery'

export default function OAuth() {

    const login_modal = useRef(null)

    useEffect(() => {

        loginWithNaver();
        const close_modal = () => {  //모달창 취소 이벤트
            $(login_modal.current).foundation('close')
        }
        const close_btn = document.getElementById("close-btn")
        close_btn.addEventListener('click', close_modal)

        const kakao_btn = document.getElementById("kakao-login-btn")
        kakao_btn.addEventListener('click', loginWithKakao)

        return () => {
            close_btn.removeEventListener('click', close_modal)
            kakao_btn.removeEventListener('click', loginWithKakao)
        }



    }, [])

    function loginWithNaver() {
        var naver_id_login = new window.naver_id_login(process.env.REACT_APP_NAVER_CLIENT_ID, process.env.REACT_APP_NAVER_CALLBACK);
        var state = naver_id_login.getUniqState();
        naver_id_login.setButton("", 3, 50);
        naver_id_login.setDomain("http://localhost:3000");
        naver_id_login.setState(state);
        naver_id_login.setPopup();
        naver_id_login.init_naver_id_login();
    }

    function loginWithKakao() {
        console.log('qdwqqw : ' + process.env.REACT_APP_KAKAO_CALLBACK)
        window.Kakao.Auth.authorize({
            redirectUri: process.env.REACT_APP_KAKAO_CALLBACK
        });
    }

    return (
        <div className="reveal" id="login-reveal" data-reveal data-animation-in="fade-in" data-animation-out="fade-out"
             ref={login_modal}>
            <div id="naver_id_login"></div>

            <a id="kakao-login-btn">
                <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222"
                     alt="카카오 로그인 버튼"/>
            </a>
            <a className={"close"} id={"close-btn"}></a>
        </div>
    )
}