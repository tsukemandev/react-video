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
                                            "banner": "https://d15hrwnd04s9fc.cloudfront.net/movie/banner/dayandnight-banner.png",
                                            "url": "https://d15hrwnd04s9fc.cloudfront.net/movie/dayandnight/index.m3u8",
                                            "title": "Day and Night",
                                            "id": 7
                                        }}>
                                            <figure className="orbit-figure">
                                                <img className="orbit-image"
                                                    src={'https://d15hrwnd04s9fc.cloudfront.net/movie/banner/dayandnight-banner.png'}
                                                    alt="Space" />
                                                <figcaption className="orbit-caption">{'Day and Night'}</figcaption>
                                            </figure>
                                        </Link>
                                    </li>


                                    <li className="is-active orbit-slide">
                                        <Link to={{ pathname: "/movie" + "/video/" + 7 }} state={{
                                            "banner": "https://d15hrwnd04s9fc.cloudfront.net/movie/banner/laluna-banner.jpg",
                                            "url": "https://d15hrwnd04s9fc.cloudfront.net/movie/laluna/index.m3u8",
                                            "title": "Laluna",
                                            "id": 4
                                        }}>
                                            <figure className="orbit-figure">
                                                <img className="orbit-image"
                                                    src={'https://d15hrwnd04s9fc.cloudfront.net/movie/banner/laluna-banner.jpg'}
                                                    alt="Space" />
                                                <figcaption className="orbit-caption">{'Laluna'}</figcaption>
                                            </figure>
                                        </Link>
                                    </li>

                                </ul>) : (

                                <ul className="orbit-container">

                                    <li className="is-active orbit-slide">
                                        <Link to={{ pathname: "/anime" + "/video/" + 8 }} state={{
                                            "banner": "https://d15hrwnd04s9fc.cloudfront.net/anime/thumbnail/hungrydays-onepiece-banner.webp",
                                            "url": "https://d15hrwnd04s9fc.cloudfront.net/anime/onepiece-hungrydays/hungry-days-bump-of-chicken.m3u8",
                                            "title": "OnePiece Hungry Days",
                                            "id": 8
                                        }}>
                                            <figure className="orbit-figure">
                                                <img className="orbit-image"
                                                    src={'https://d15hrwnd04s9fc.cloudfront.net/anime/thumbnail/hungrydays-onepiece-banner.webp'}
                                                    alt="Space" />
                                                <figcaption className="orbit-caption">{'OnePiece Hungry Dayst'}</figcaption>
                                            </figure>
                                        </Link>
                                    </li>


                                    <li className="is-active orbit-slide">
                                        <Link to={{ pathname: "/anime" + "/video/" + 9 }} state={{
                                            "banner": "https://d15hrwnd04s9fc.cloudfront.net/anime/thumbnail/spyfamily-banner.webp",
                                            "url": "https://d15hrwnd04s9fc.cloudfront.net/anime/spyfamily/index.m3u8",
                                            "title": "Spy Family",
                                            "id": 9
                                        }}>
                                            <figure className="orbit-figure">
                                                <img className="orbit-image"
                                                    src={'https://d15hrwnd04s9fc.cloudfront.net/anime/thumbnail/spyfamily-banner.webp'}
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
                                <span className="show-for-sr" data-slide-active-label>Current Slide</span>
                            </button>
                            <button data-slide="1"><span className="show-for-sr">Second slide details.</span></button>
                            {/*<button data-slide="2"><span className="show-for-sr">Third slide details.</span></button>
                            <button data-slide="3"><span className="show-for-sr">Fourth slide details.</span></button>*/}
                        </nav>
                    </div>
                </div>

                <div className="row small-up-2 medium-up-3 large-up-4">


                    {Array.isArray(data) && data.map((item) => (
                        // 데이터 배열을 순회하며 각 항목을 DOM 요소로 변환합니다.

                        <Link to={{ pathname: "/" + category + "/video/" + item.id }} state={item} className={"column"} key={item.id}>
                            <img className="thumbnail" src={item.thumbnail} alt={""} />
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