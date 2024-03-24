window.naver_login = null
window.naverSignInCallback = function () {
    console.log('네이버 사용자 정보 : ' + JSON.stringify(window.naver_login))
}

// App.js 에서 실행시 두번 실행되서 여기서 초기화
window.Kakao.init(process.env.REACT_APP_KAKAO_CLIENTID_JS); // 사용하려는 앱의 JavaScript 키 입력
console.log(window.Kakao.isInitialized())
/*
element.addEventListener('transitionstart', () => {
    isToggled = !isToggled;

    if (isToggled) {
        let clientHeight = document.getElementById('responsive-menu').clientHeight;
        let test = document.getElementsByClassName('content').item(0)
        test.style.paddingTop = clientHeight + "px"
    } else {
        let clientHeight = 0
        let test = document.getElementsByClassName('content').item(0)
        test.style.paddingTop = clientHeight + "px"
    }

})*/
