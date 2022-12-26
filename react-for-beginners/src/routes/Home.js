import React, {useState, useEffect} from 'react';
import Movie from '../components/Movie';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  
    const getMovies = async() => {
      const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
      
    }
  
    useEffect(() => {
      getMovies();
    }, [])
    console.log(movies)
    return (
      <div>
        {loading ? <h1>Loading ... </h1> : <div>{
          movies.map((movie) => <Movie 
          key={movie.id}
          mediumCoverImage={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.summary} 
          genres={movie.genres}
          />)
          }</div>}
      </div>
    )
}

export default Home;

//aim - 유저가 영화 제목을 클릭하면 Detail스크린으로 가게 하고 싶다.

//일반적인 html이었다면, a 태그를 만들어서 href를 지정했겠지만, 이렇게 만들면 화면 전체가 재실행된다.
//Link를 사용하면 브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜준다.