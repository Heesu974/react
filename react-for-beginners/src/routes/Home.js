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

//Home route는 기본적으로 우리의 App component 전체를 가지고 있습니다.
// route === screen === page

//Switch component가 있는 이유는 한 번에 하나의 Route만 렌더링하기 위함이다.
// > React Router에서는 원한다면, 두 개의 Route를 한 번에 렌더링할 수 있다.