import React, {useState, useEffect} from 'react';

// "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"

function App () {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    .then(response => response.json()).then(json => {
      setMovies(json.data.movies);
      setLoading(false);
    })
  }, [])
  console.log(movies)
  return (
    <div>

      {loading ? <h1>Loading ... </h1> : null}
    </div>
  )
}

export default App;

//aim . 영화 목록을 보여주고, 정보를 넣어주고, 링크를 걸어준다. 해당 영화에 대해 더 많은 것을 찾아볼 수 있도록 앱에서 다른 곳으로 연결까지
// aim. 앱 안에서 페이지 전환하는 방법까지
//1.. 로딩인 것을 먼저 보여주고.
//2. component가 시작할 때만 특정 코드를 실행하고 싶다.
//then보다 더 보편적으로 사용하는게 있다. 이거 대신 async-await을 사용합니다.
//async-await을 사용하기 위해 getMovies라는 함수를 만듭니다.