import React from 'react';
import Navbar from './Components/navBar';
import Login from './Components/login';
import Register from './Components/register';
import Home from './Components/home';
import Admin from './Components/admin'
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar/>
      <Route exact path ="/" component = {Home}/>
      <Route path = "/login" component = {Login}/>
      <Route path = "/register" component = {Register}/>

    </Router>

  );
}

export default App;
