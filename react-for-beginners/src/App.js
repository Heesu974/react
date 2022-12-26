import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';


function App () {
 return (
  <Router>
    <Switch>
      <Route path='/movie'>
        <Detail />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </Router>
 )
}

export default App;

//누군가 우리 웹사이트의 '/' url에 있다면, Home compoent를 보여줄 겁니다.
