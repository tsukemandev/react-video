import React, {useEffect} from "react";
import {useLoaderData} from "react-router-dom";


export function loader(requests) {
    return requests
}

export default function OAuthRedirect() {
    const requests = useLoaderData()
    const params = requests.params


    useEffect(() => {
        if (params.service === 'naver') {
            redirectFromNaver()
        } else if (params.service === 'kakao') {
            redirectFromKakao()
        }
    }, []);

    function redirectFromNaver() {
        window.naver_login = new window.naver_id_login(process.env.REACT_APP_NAVER_CLIENT_ID, process.env.REACT_APP_NAVER_CALLBACK);
        // 접근 토큰 값 출력
        //alert(window.naver_login.oauthParams.access_token);
        // 네이버 사용자 프로필 조회
        window.naverSignInCallback()
        window.naver_login.get_naver_userprofile("window.naverSignInCallback()");
        // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
    }

    async function redirectFromKakao() {
        const url = new URL(requests.request.url);
        const code = url.searchParams.get("code");

        let data = new URLSearchParams();
        data.append("code", code)
        data.append("grant_type", "authorization_code")
        data.append("client_id", process.env.REACT_APP_KAKAO_CLIENTID_REST)
        data.append("redirect_uri", process.env.REACT_APP_KAKAO_CALLBACK)
        data.append("client_secret", process.env.REACT_APP_KAKAO_SECRETKEY)

        let response = await fetch('https://kauth.kakao.com/oauth/token', {
            method: 'POST',
            headers: {
                // the content type header value is usually auto-set
                // depending on the request body
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            body: data
        });

        let result = await response.json();

        window.Kakao.Auth.setAccessToken(result.access_token)
        window.Kakao.API.request({
            url: '/v2/user/me',
        })
            .then(function(response) {
                
            })
            .catch(function(error) {
                
            });
    }




    return (
        <div>ee</div>
    )
}