import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({mediumCoverImage,title,summary,genres}) {
    return (<div>
        <img src={mediumCoverImage} alt={title}/>
    <h3>
      <Link to='/movie'>{title}</Link>
    </h3>
    
    <p>
    {summary}
    </p>
    <ul>
      {genres.map((genre,index) => (
        <li key={index}>{genre}</li>
      ))}
    </ul>

    </div>
)}

Movie.prototype = {
    mediumCoverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;


