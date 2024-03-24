import React, {useEffect} from "react";
import { useState } from "react";

import {Link} from "react-router-dom";


export default function Contents() {

    const [items, setItems] = useState([]); 

    function getVideos() {
        fetch('http://localhost:8000/video/movie', {
            method: 'GET',
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json(); // 성공적인 응답의 경우, 텍스트로 변환
                } else {
                    return response.text().then(data => {
                        // 오류 메시지를 포함한 예외 발생
                        throw new Error(data);
                    });
                }
            })
            .then(data => {
                // 성공적인 응답 데이터 처리
                console.log(data)
                setItems(data.data)
            })
            .catch(error => {
                // 오류 처리
                alert(error)
                console.error('Error:', error);
            });
    }


    useEffect(() => {
        const Jquery = require('jquery')
        Jquery(document).ready($ => {
            $(document).foundation()
        })

        getVideos();
        
    }, []);

    return (

        <div className={"content"}>

            <div className="row small-up-2 medium-up-3 large-up-4">
                <div className="off-canvas-content" data-off-canvas-content="">

                    <div className="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
                        <div className="orbit-wrapper">
                            <div className="orbit-controls">
                                <button className="orbit-previous"><span
                                    className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
                                <button className="orbit-next"><span
                                    className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
                            </div>
                            <Link to={"/home/video/1"}>
                                <ul className="orbit-container">
                                    <li className="is-active orbit-slide">
                                        <figure className="orbit-figure">
                                            <img className="orbit-image"
                                                 src={"https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg"}
                                                 alt="Space"/>
                                            <figcaption className="orbit-caption">Space, the final frontier.
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li className="orbit-slide">
                                        <figure className="orbit-figure">
                                            <img className="orbit-image"
                                                 src={"https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg"}
                                                 alt="Space"/>
                                            <figcaption className="orbit-caption">Lets Rocket!</figcaption>
                                        </figure>
                                    </li>
                                    <li className="orbit-slide">
                                        <figure className="orbit-figure">
                                            <img className="orbit-image"
                                                 src={"https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg"}
                                                 alt="Space"/>
                                            <figcaption className="orbit-caption">Encapsulating</figcaption>
                                        </figure>
                                    </li>
                                    <li className="orbit-slide">
                                        <figure className="orbit-figure">
                                            <img className="orbit-image"
                                                 src={"https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg"}
                                                 alt="Space"/>
                                            <figcaption className="orbit-caption">Outta This World</figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </Link>
                        </div>
                        <nav className="orbit-bullets">
                            <button className="is-active" data-slide="0">
                                <span className="show-for-sr">First slide details.</span>
                                <span className="show-for-sr" data-slide-active-label>Current Slide</span>
                            </button>
                            <button data-slide="1"><span className="show-for-sr">Second slide details.</span></button>
                            <button data-slide="2"><span className="show-for-sr">Third slide details.</span></button>
                            <button data-slide="3"><span className="show-for-sr">Fourth slide details.</span></button>
                        </nav>
                    </div>
                </div>

                <div className="row small-up-2 medium-up-3 large-up-4">

                {items.map((item, index) => (
                    // 데이터 배열을 순회하며 각 항목을 DOM 요소로 변환합니다.

                    <Link to={{pathname : "/home/video/" + item.id, state : item.url}} className={"column"} key={item.id}>
                    <img className="thumbnail" src={item.thumbnail} alt={""}/>
                    <h5>{item.title}</h5>
                    </Link>

                ))}

                    {/*
                    <Link to={"/home/video/1"} className={"column"}>
                        <img className="thumbnail" src={process.env.PUBLIC_URL + "/test/1.png"} alt={""}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/2"} className={"column"}>
                        <img className="thumbnail" src={process.env.PUBLIC_URL + "/test/2.png"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/3"} className={"column"}>
                        <img className="thumbnail" src={process.env.PUBLIC_URL + "/test/3.png"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/4"} className={"column"}>
                        <img className="thumbnail" src={process.env.PUBLIC_URL + "/test/dog_1.gif"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/5"} className={"column"}>
                        <img className="thumbnail" src={process.env.PUBLIC_URL + "/test/dog_2.gif"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/6"} className={"column"}>
                        <img className="thumbnail" src={process.env.PUBLIC_URL + "/test/dog_3.gif"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/7"} className={"column"}>
                        <img className="thumbnail" src={process.env.PUBLIC_URL + "/test/music_1.gif"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/8"} className={"column"}>
                        <img className="thumbnail" src={process.env.PUBLIC_URL + "/test/music_2.gif"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/9"} className={"column"}>
                        <img className="thumbnail" src={process.env.PUBLIC_URL + "/test/panda_1.gif"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/10"} className={"column"}>
                        <img className="thumbnail" src={process.env.PUBLIC_URL + "/test/panda_2.gif"}/>
                        <h5>My Site</h5>
                    </Link>
                    <Link to={"/home/video/11"} className={"column"}>
                        <img className="thumbnail" src="https://placehold.it/550x550"/>
                        <h5>My Site</h5>
                </Link> */}

                </div>

            </div>


        </div>


    )
}