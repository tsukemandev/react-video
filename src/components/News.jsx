import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

export default function News() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchRSS()
    }, []);

    async function fetchRSS() {
        const requestOptions = {
            method: 'GET',
            mode: 'cors', // CORS 이슈를 해결하기 위해 'cors'로 설정
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:8000',
                'Content-Type': 'application/json',
                // 필요한 경우 다른 헤더를 추가할 수 있습니다.
                // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
            }
        };

        // RSS 피드 URL
        const rssFeedUrl = process.env.REACT_APP_RSS_FEED;// process.env.REACT_APP_KAKAO_CLIENTID_REST

        // fetch를 통해 RSS 피드 가져오기
        await fetch(rssFeedUrl)
            .then(response => response.json())
            .then(articles => setArticles(articles))
            .catch(error => console.error('Error fetching RSS:', error));
    }


    function getData() {
        //articles.forEach(item => console.log(item.title))
        return articles.map(item =>
            <Link to={item.link} key={item.guid}>
                <div className={"rss_article"}>
                    <div className={"rss_article_channel_title"}>
                        {item.channelTitle}  &nbsp; &nbsp; &nbsp; {item.pubDate}
                    </div>
                    <div className={"rss_article_title"}>
                        {item.title}
                    </div>
                    <div className={"rss_article_content"}>
                        {item.description} ...
                    </div>
                </div>
            </Link>
        )

    }


    return (
        <div className={"rss_articles"}>
            <div className={"news-wrapper"}>
                <h1>RSS Movie News</h1>
                {getData()}
            </div>
            
        </div>
    )
}