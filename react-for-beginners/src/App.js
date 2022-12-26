import React, {useState, useEffect} from 'react';
import Movie from './components/Movie';

// "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"

function App () {
 return null;
}

export default App;

//aim . 영화 목록을 보여주고, 정보를 넣어주고, 링크를 걸어준다. 해당 영화에 대해 더 많은 것을 찾아볼 수 있도록 앱에서 다른 곳으로 연결까지
// aim. 앱 안에서 페이지 전환하는 방법까지
//1.. 로딩인 것을 먼저 보여주고.
//2. component가 시작할 때만 특정 코드를 실행하고 싶다.
//then보다 더 보편적으로 사용하는게 있다. 이거 대신 async-await을 사용합니다.
//async-await을 사용하기 위해 getMovies라는 함수를 만듭니다.
//map을 사용해서 json 데이터를 화면에 뿌립니다.
//state로부터 받은 data를 보여주는 것 뿐입니다.
//key는 react.js에서만, map 안에서 component를 render할 때 사용합니다.