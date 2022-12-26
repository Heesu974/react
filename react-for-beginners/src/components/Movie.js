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

// /movie/:id로 연결하기 위해서는 Movie component에서 id를 연결해야 하는데
//현재의 movie component에서는 props 로 id를 받지 않고 있습니다.
//이 말은 즉슨, Movie 컴포넌트의 부모 요소 즉, Home component를 살펴봐야 한다는 건데, 
//Home이 바로 Movie 컴포넌트를 렌더링하는 녀석이고,  Home component가 id를 prop으로 넘겨주고 있지 않습니다.
//그래서 Home에서 prop으로 id를 먼저 넘겨줘야 합니다.

//component를 렌더링한다는 것은, 실질적으로 함수를 불러오는 것이다.
//props는 object일 뿐이고, 우리는 그걸 열어서 item을 꺼내 쓰는 것입니다.



