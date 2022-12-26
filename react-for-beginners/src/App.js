import React from 'react';
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';


function App () {
 return (
  <Router>

    <Routes>
          <Route path="/movie/:id" element={<Detail />} />
            
          <Route exact path="/" element={<Home/>} />
            
          
        </Routes>
  
  </Router>
 )
}

export default App;

//react router는 다이나믹 url을 지원해줍니다. 
//다이나믹하다는 것은 url에 변수를 넣을 수 있다는 의미입니다.
//유저가 /movie/:id로 접근하면, 
