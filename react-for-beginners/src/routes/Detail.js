import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';

function Detail() {
    const {id} = useParams();
    useEffect(() => {
        
    }, [])
    console.log(id)

    return <h1>Detail</h1>
}
export default Detail;

//Home route에서는 기본적으로 로딩하거나 영화 리스트 전체를 보여주는 스크린 전체를 만듦
//router는 url을 보고있는 component고, 
//사용자가 클라이언트에 localhost:3000/을 요청한다면,
//router는 클라이언트에 Home Component를 보여준다.
//url 요청이 localhost:3000/movies/{movie.id}가 된다면, 
//router는 클라이언트에 Detail component를 보여줄 것이다.



//aim - react-router-dom 사용법

// 현재 url이 
//https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year 이건데,
//여기서 어떠함 것에도 간섭받지 않는다고? - useEffect의 []를 통해서, 
//8분에서