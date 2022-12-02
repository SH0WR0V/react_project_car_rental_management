import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import Registration from './Components/Registration';
import Login from './Components/Login';
import ViewCarList from './Components/ViewCarList';
import Logout from './Components/Logout';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

var token=null;
if(localStorage.getItem('user')){
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.access_token;
}
axios.defaults.headers.common["Authorization"] = token;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/profile"><Profile/></Route>
          <Route exact path="/registration"><Registration/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/view_car_list"><ViewCarList/></Route>
          <Route exact path="/logout"><Logout/></Route>
        </Switch>
    <Footer/>
        
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
