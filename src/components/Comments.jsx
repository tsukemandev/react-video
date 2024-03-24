import React, {useEffect} from "react";

export default function Comments() {

    useEffect(() => {
        console.log('ss : ' + process.env.PUBLIC_URL)
    }, []);

    return (
        <article className={"comments"}>
            <article className={"comment"}>
                <span className={"img_wrapper"}>
                    <img src={process.env.PUBLIC_URL + "/profile/dog_profile.jpg"} alt={"프로필 사진"}/>
                </span>
                <span className={"comment_wrapper"}>
                    <span className={"comment_wrapper_top"}>
                        <h4 className={"nick_name"}>테스트닉네임1</h4>
                        <div className={"date"}>3 hour ago</div>
                    </span>
                    <span className={"comment_wrapper_bottom"}>
                        <span>심플 비디오 댓글 테스트!!!</span>
                        <span>심플 비디오 댓글 테스트!!!</span>
                        <span>심플 비디오 댓글 테스트!!!</span>
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
                        <h4 className={"nick_name"}>테스트닉네임2</h4>
                        <div className={"date"}>5 hour ago</div>
                    </span>
                    <span className={"comment_wrapper_bottom"}>
                        <span>심플 비디오 댓글 테스트!!!</span>
                        <span>심플 비디오 댓글 테스트!!!</span>
                        <span>심플 비디오 댓글 테스트!!!</span>
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