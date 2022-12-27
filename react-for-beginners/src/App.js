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
            
          <Route exact path="/react" element={<Home/>} />
            
          
        </Routes>
  
  </Router>
 )
}

export default App;


//235가 영화 카드가 지원하는 최대 길이라고 했을 때,