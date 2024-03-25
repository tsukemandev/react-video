import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import VideoJs from "./VideoJs";
import Comments from "./Comments";
import { useLocation } from "react-router-dom";

export default function Content() {

    const location = useLocation();
    const data = location.state || {}; // state가 없을 경우를 대비한 기본값 설정



    const playerRef = useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        poster: 'https://picsum.photos/200',
        sources: [{
            src: 'https://d1buzuj0s6bbq3.cloudfront.net/hungry-days-bump-of-chicken.m3u8',
            type: 'application/x-mpegURL'
        }],

    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="content" id={"detail"}>
            <div className={"row"}>
                <div className="w3-container w3-center w3-animate-left">
                    <h1>{data.title}</h1>
                </div>

                <VideoJs options={videoJsOptions} onReady={handlePlayerReady} />

                <form className="comment-section-form">
                    <div className="comment-section-box">
                        <div className="row">
                            <div className="small-12 column">

                                <label>댓글
                                    <textarea rows="2" type="text"></textarea>
                                </label>
                                <button className="button expanded">입력</button>
                            </div>
                        </div>
                    </div>
                </form>
                <Comments></Comments>
            </div>
        </div>
    )
}