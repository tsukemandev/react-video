import {useRef} from 'react';
import MotionUI from 'motion-ui'
import videojs from 'video.js';
import VideoJs from "./VideoJs";



export default function Test() {

    let ref = useRef(null)
    const playerRef = useRef(null);
    let toggle = false


    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        poster: 'https://picsum.photos/200',
        sources: [{
            src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
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

    return (
        <div>
            <header>
                <div className="title-bar">
                    <button className="menu-icon"
                            type="button"
                            data-toggle="responsive-menu"
                            onClick={() => {
                                if (toggle) {
                                    MotionUI.animateIn(ref.current, 'fade-in');
                                } else {
                                    MotionUI.animateOut(ref.current, 'fade-out');
                                }
                                toggle = !toggle
                            }}></button>
                    <div className="title-bar-title">Menu</div>
                </div>

                <div className="top-bar">
                    <div className="fixed-section">
                        <h5>TITLE</h5>
                    </div>

                    <div className="flex-section">
                        <div className="top-bar-left">
                            <ul className="menu">
                                <li className="search-bar">
                                    <input id="search" type="search" placeholder="Search"/>
                                </li>
                                <li className="search-btn">
                                    <button type="button" className="button">검색</button>
                                </li>
                            </ul>
                        </div>

                        <div className="top-bar-right">
                            <ul className="menu">
                                <li className="search-btn">
                                    <button type="button" className="button">로그인</button>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            </header>

            <section>
                <aside>
                    <div className="sidebar" ref={ref}>
                        <a className="active" href={"test"}>Home</a>
                        <a href={"test"}>News</a>
                        <a href={"test"}>Contact</a>
                        <a href={"test"}>About</a>
                    </div>
                </aside>

                <div className="content">
                    <div className="w3-container w3-center w3-animate-left">
                        <h1>Animation is Fun!</h1>
                        <p>The w3-animate-left class slides in an element from left.</p>
                    </div>


                    <VideoJs options={videoJsOptions} onReady={handlePlayerReady} />

                </div>
            </section>
        </div>
    )
}
