import React, {useEffect} from "react";

export default function Comments() {



    return (
        <article className={"comments"}>
            <article className={"comment"}>
                <span className={"img_wrapper"}>
                    <img src={process.env.PUBLIC_URL + "/profile/dog_profile.jpg"} alt={"프로필 사진"}/>
                </span>
                <span className={"comment_wrapper"}>
                    <span className={"comment_wrapper_top"}>
                        <h4 className={"nick_name"}>테스터1</h4>
                        <div className={"date"}>3 hour ago</div>
                    </span>
                    <span className={"comment_wrapper_bottom"}>
                        <span>해당 프로젝트는 React.js 를 활용하여 만든</span>
                        <span>주문형 비디오 서비스입니다.</span>
                    </span>
                </span>
                <span className={"like_wrapper"}>
                    <img src={process.env.PUBLIC_URL + "/icon/heart.png"} alt={"프로필 사진"}/>
                    <div>
                        <span>수정</span>
                        <span> | </span>
                        <span>삭제</span>
                    </div>
                </span>
            </article>

            <article className={"comment"}>
                <span className={"img_wrapper"}>
                    <img src={process.env.PUBLIC_URL + "/profile/color_profile.png"} alt={"프로필 사진"}/>
                </span>
                <span className={"comment_wrapper"}>
                    <span className={"comment_wrapper_top"}>
                        <h4 className={"nick_name"}>테스터2</h4>
                        <div className={"date"}>5 hour ago</div>
                    </span>
                    <span className={"comment_wrapper_bottom"}>
                        <span>해당 프로젝트는 React.js 를 활용하여 만든</span>
                        <span>주문형 비디오 서비스입니다.</span>
                    </span>
                </span>
                <span className={"like_wrapper"}>
                    <img src={process.env.PUBLIC_URL + "/icon/heart.png"} alt={"프로필 사진"}/>
                    <div>
                        <span>수정</span>
                        <span> | </span>
                        <span>삭제</span>
                    </div>
                </span>
            </article>

        </article>
    )
}