import React, { useEffect } from 'react';
import {json, useParams} from 'react-router-dom';

function Detail() {
    const {id} = useParams();
    const getMovie = async() => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`);
        const json = await response.json();
        console.log('id로 추출',json)
      
    }
    useEffect(() => {
       getMovie();
     
    }, [])
    console.log(id)

    return <h1>Detail</h1>
}
export default Detail;

//package.json 의 script build를 실행하면 production ready code를 생성하게 된다.
//production ready란 코드가 압축되고 모든게 최적화된다는 의미.

//package.json  의 gh-pages -d build 가 하는 일은
//gh-pages가 build 폴더 (directory)를 homepage라고 적어 놓은 github io 페이지에 업로드하도록 한느 것이다.
