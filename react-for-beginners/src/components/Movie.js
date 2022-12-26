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

//aim1 home route에서 모든 영화를 보여주고,
//aim2 movie route를 두고, 이 곳에서는 영화 하나만 보여줍니다.

