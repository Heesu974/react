import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({mediumCoverImage,title,summary,genres, id}) {
    return (<div>
        <img src={mediumCoverImage} alt={title}/>
    <h3>
      <Link to={`/movie/${id}`}>{title}</Link>
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
    id:PropTypes.number.isRequired,
}

export default Movie;

//그렇다면 {`/movie/${id}`} 여기에 어떤 id가 오는지 알 수 있다면? 
//이 url에 요청을 보낼 수 있기 때문에 매우 유용한 발전이 될 수 있다.


//   /movie/:id 는 React Router한테 여기 오는 id값이 뭔지 알고 싶다고 말하는 것이다.
// url에 있는 값을 반환해주는 함수를 이용 - useParams




