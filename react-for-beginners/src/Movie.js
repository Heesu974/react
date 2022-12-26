import React from 'react';
import PropTypes from 'prop-types';

function Movie({mediumCoverImage,title,summary,genres}) {
    return <div>
        <img src={mediumCoverImage}/>
    <h3>{title}</h3>
    
    <p>
    {summary}
    </p>
    <ul>
      {genres.map((genre,index) => (
        <li key={index}>{genre}</li>
      ))}
    </ul>

    </div>;
}

Movie.prototype = {
    mediumCoverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
//movie component는 위의 property를 모두 부모 component로부터 받아옵니다. - props

//movies/movie.id 가 붙은 페이지로 갈 수 ㅣㅇㅆ는 것을 목표로 한다.

//react-router-dom을해서 react-router를 사용합니다.

//이제는 스크린  단위로 작성해야 합니다.