import React, { useEffect } from "react";
import { useState } from "react";

import { Link, useLocation } from "react-router-dom";


import testData from '../data.json'


export default function Contents() {

    const [data, setData] = useState([]);
    const [banners, setBanners] = useState([])
    const [category, setCategory] = useState('');
    const [isMovie, setIsMovie] = useState(true);

    const location = useLocation();
    const Jquery = require('jquery')



    useEffect(() => {
        // location.state가 변경될 때마다 실행될 로직

        if (location.state) {
            setBanners(location.state.banners)
            setData(location.state.data)
        }
        console.log('location useEffect')
        setCategory(window.location.pathname.split('/')[1])

        setIsMovie(window.location.pathname.split('/')[1] === 'movie')
    }, [location]);

    /*function getVideos() {
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
    }*/


    useEffect(() => {
        setTimeout(() => {
            Jquery(document).ready($ => {
                $(document).foundation()
            })
        }, 500)


    }, [data, banners]);



    useEffect(() => {

        if (!data || data.length <= 0) {
            setData(testData[0].data)
            console.log('test1')
            if (window.location.pathname.split('/')[1] === 'anime') {
                setData(testData[1].data)
                console.log('test2')
            }
        }


    }, [category]);


    useEffect(() => {

        const pathname = window.location.pathname;
        setCategory(pathname.split('/')[1])


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

                            {isMovie ? (
                                <ul className="orbit-container">

                                    <li className="is-active orbit-slide">
                                        <Link to={{ pathname: "/movie" + "/video/" + 4 }} state={{
                                            "banner": "https://d2ktbn03f68jht.cloudfront.net/movie/banner/dayandnight-banner.png",
                                            "url": "https://d2ktbn03f68jht.cloudfront.net/movie/dayandnight/stream_0/stream_0.m3u8",
                                            "title": "Day and Night",
                                            "id": 7
                                        }}>
                                            <figure className="orbit-figure">
                                                <img className="orbit-image"
                                                    src={'https://d2ktbn03f68jht.cloudfront.net/movie/banner/dayandnight-banner.png'}
                                                    alt="Space" />
                                                <figcaption className="orbit-caption">{'Day and Night'}</figcaption>
                                            </figure>
                                        </Link>
                                    </li>


                                    <li className="is-active orbit-slide">
                                        <Link to={{ pathname: "/movie" + "/video/" + 7 }} state={{
                                            "banner": "https://d2ktbn03f68jht.cloudfront.net/movie/banner/laluna-banner.jpg",
                                            "url": "https://d2ktbn03f68jht.cloudfront.net/movie/laluna/stream_0/stream_0.m3u8",
                                            "title": "Laluna",
                                            "id": 4
                                        }}>
                                            <figure className="orbit-figure">
                                                <img className="orbit-image"
                                                    src={'https://d2ktbn03f68jht.cloudfront.net/movie/banner/laluna-banner.jpg'}
                                                    alt="Space" />
                                                <figcaption className="orbit-caption">{'Laluna'}</figcaption>
                                            </figure>
                                        </Link>
                                    </li>

                                </ul>) : (

                                <ul className="orbit-container">

                                    <li className="is-active orbit-slide">
                                        <Link to={{ pathname: "/anime" + "/video/" + 8 }} state={{
                                            "banner": "https://d2ktbn03f68jht.cloudfront.net/anime/thumbnail/hungrydays-onepiece-banner.webp",
                                            "url": "https://d2ktbn03f68jht.cloudfront.net/anime/onepiece-hungrydays/hungry-days-bump-of-chicken.m3u8",
                                            "title": "OnePiece Hungry Days",
                                            "id": 8
                                        }}>
                                            <figure className="orbit-figure">
                                                <img className="orbit-image"
                                                    src={'https://d2ktbn03f68jht.cloudfront.net/anime/thumbnail/hungrydays-onepiece-banner.webp'}
                                                    alt="Space" />
                                                <figcaption className="orbit-caption">{'OnePiece Hungry Dayst'}</figcaption>
                                            </figure>
                                        </Link>
                                    </li>


                                    <li className="is-active orbit-slide">
                                        <Link to={{ pathname: "/anime" + "/video/" + 9 }} state={{
                                            "banner": "https://d2ktbn03f68jht.cloudfront.net/anime/thumbnail/spyfamily-banner.webp",
                                            "url": "https://d2ktbn03f68jht.cloudfront.net/anime/spyfamily/index.m3u8",
                                            "title": "Spy Family",
                                            "id": 9
                                        }}>
                                            <figure className="orbit-figure">
                                                <img className="orbit-image"
                                                    src={'https://d2ktbn03f68jht.cloudfront.net/anime/thumbnail/spyfamily-banner.webp'}
                                                    alt="Space" />
                                                <figcaption className="orbit-caption">{'Spy Family'}</figcaption>
                                            </figure>
                                        </Link>
                                    </li>

                                </ul>


                            )}

                        </div>
                        <nav className="orbit-bullets">
                            <button className="is-active" data-slide="0">
                                <span className="show-for-sr">First slide details.</span>

                            </button>
                            <button data-slide="1">
                                <span className="show-for-sr">Second slide details.</span>
                                <span className="show-for-sr" data-slide-active-label>Current Slide</span>
                            </button>
                            {/*<button data-slide="2"><span className="show-for-sr">Third slide details.</span></button>
                            <button data-slide="3"><span className="show-for-sr">Fourth slide details.</span></button>*/}
                        </nav>
                    </div>
                </div>

                {isMovie ? (
                    <div className="row small-up-2 medium-up-3 large-up-4">
                        <Link to={{ pathname: "/movie/video/" + 1 }} state={{
                            "thumbnail": "https://d2ktbn03f68jht.cloudfront.net/movie/thumbnail/boundin.jpg",
                            "url": "https://d2ktbn03f68jht.cloudfront.net/movie/boundin/stream_0/stream_0.m3u8",
                            "title": "Bound In",
                            "id": 1
                        }} className={"column"}>
                            <img className="thumbnail" src={'https://d2ktbn03f68jht.cloudfront.net/movie/thumbnail/boundin.jpg'} alt={""} />
                            <h5>{'Bound In'}</h5>
                        </Link>
                        <Link to={{ pathname: "/movie/video/" + 2 }} state={{
                            "thumbnail": "https://d2ktbn03f68jht.cloudfront.net/movie/thumbnail/air-master.jpg",
                            "url": "https://d2ktbn03f68jht.cloudfront.net/movie/airmaster/stream_0/stream_0.m3u8",
                            "title": "Air Master",
                            "id": 2
                        }} className={"column"}>
                            <img className="thumbnail" src={'https://d2ktbn03f68jht.cloudfront.net/movie/thumbnail/air-master.jpg'} alt={""} />
                            <h5>{'Air Master'}</h5>
                        </Link>
                        <Link to={{ pathname: "/movie/video/" + 3 }} state={{
                            "thumbnail": "https://d2ktbn03f68jht.cloudfront.net/movie/thumbnail/burn-e.jpg",
                            "url": "https://d2ktbn03f68jht.cloudfront.net/movie/burn-e/stream_0/stream_0.m3u8",
                            "title": "Burn-E",
                            "id": 3
                        }} className={"column"}>
                            <img className="thumbnail" src={'https://d2ktbn03f68jht.cloudfront.net/movie/thumbnail/burn-e.jpg'} alt={""} />
                            <h5>{'Burn-E'}</h5>
                        </Link>
                        <Link to={{ pathname: "/movie/video/" + 4 }} state={{
                            "thumbnail": "https://d2ktbn03f68jht.cloudfront.net/movie/thumbnail/laluna.png",
                            "url": "https://d2ktbn03f68jht.cloudfront.net/movie/laluna/stream_0/stream_0.m3u8",
                            "title": "Laluna",
                            "id": 4
                        }} className={"column"}>
                            <img className="thumbnail" src={'https://d2ktbn03f68jht.cloudfront.net/movie/thumbnail/laluna.png'} alt={""} />
                            <h5>{'Laluna'}</h5>
                        </Link>
                        <Link to={{ pathname: "/movie/video/" + 5 }} state={{
                            "thumbnail": "https://d2ktbn03f68jht.cloudfront.net/movie/thumbnail/dougs-mission.jpg",
                            "url": "https://d2ktbn03f68jht.cloudfront.net/movie/dougs-mission/stream_0/stream_0.m3u8",
                            "title": "Dougs Mission",
                            "id": 5
                        }} className={"column"}>
                            <img className="thumbnail" src={'https://d2ktbn03f68jht.cloudfront.net/movie/thumbnail/dougs-mission.jpg'} alt={""} />
                            <h5>{'Dougs Mission'}</h5>
                        </Link>
                        <Link to={{ pathname: "/movie/video/" + 6 }} state={{
                            "thumbnail": "https://d2ktbn03f68jht.cloudfront.net/movie/thumbnail/smallfly.png",
                            "url": "https://d2ktbn03f68jht.cloudfront.net/movie/toystory-smallfly/stream_0/stream_0.m3u8",
                            "title": "ToyStory SmallFly",
                            "id": 6
                        }} className={"column"}>
                            <img className="thumbnail" src={'https://d2ktbn03f68jht.cloudfront.net/movie/thumbnail/smallfly.png'} alt={""} />
                            <h5>{'ToyStory SmallFly'}</h5>
                        </Link>
                        <Link to={{ pathname: "/movie/video/" + 7 }} state={{
                            "thumbnail": "https://d2ktbn03f68jht.cloudfront.net/movie/thumbnail/day-and-night.jpg",
                            "url": "https://d2ktbn03f68jht.cloudfront.net/movie/dayandnight/stream_0/stream_0.m3u8",
                            "title": "Day and Night",
                            "id": 7
                        }} className={"column"}>
                            <img className="thumbnail" src={'https://d2ktbn03f68jht.cloudfront.net/movie/thumbnail/day-and-night.jpg'} alt={""} />
                            <h5>{'Day and Night'}</h5>
                        </Link>
                    </div>) : <div className="row small-up-2 medium-up-3 large-up-4">





                    <Link to={{ pathname: "/anime/video/" + 8 }} state={{
                        "thumbnail": "https://d2ktbn03f68jht.cloudfront.net/anime/thumbnail/hungrydays-onepice.jpg",
                        "url": "https://d2ktbn03f68jht.cloudfront.net/anime/onepiece-hungrydays/hungry-days-bump-of-chicken.m3u8",
                        "title": "OnePiece Hungry Days",
                        "id": 8
                    }} className={"column"}>
                        <img className="thumbnail" src={'https://d2ktbn03f68jht.cloudfront.net/anime/thumbnail/hungrydays-onepice.jpg'} alt={""} />
                        <h5>{'OnePiece Hungry Days'}</h5>
                    </Link>


                    <Link to={{ pathname: "/anime/video/" + 9 }} state={{
                        "thumbnail": "https://d2ktbn03f68jht.cloudfront.net/anime/thumbnail/Delicious-in-Dungeon.jpg",
                        "url": "https://d2ktbn03f68jht.cloudfront.net/anime/delicious-in-dungeon/index.m3u8",
                        "title": "Delicious in Dungeon",
                        "id": 9
                    }} className={"column"}>
                        <img className="thumbnail" src={'https://d2ktbn03f68jht.cloudfront.net/anime/thumbnail/Delicious-in-Dungeon.jpg'} alt={""} />
                        <h5>{'Delicious in Dungeon'}</h5>
                    </Link>


                    <Link to={{ pathname: "/anime/video/" + 10 }} state={{
                        "thumbnail": "https://d2ktbn03f68jht.cloudfront.net/anime/thumbnail/spyfamily.jpg",
                        "url": "https://d2ktbn03f68jht.cloudfront.net/anime/spyfamily/index.m3u8",
                        "title": "Spy Family",
                        "id": 10
                    }} className={"column"}>
                        <img className="thumbnail" src={'https://d2ktbn03f68jht.cloudfront.net/anime/thumbnail/spyfamily.jpg'} alt={""} />
                        <h5>{'Spy Family'}</h5>
                    </Link>

                </div>}

            </div>



        </div>


    )
}