import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home';
import AdminHome from './Components/AdminHome';
import CustomerHome from './Components/Customer/CustomerHome';
import RenterHome from './Components/RenterHome';
import Navbar from './Components/Customer/CustomerNavbar';
import Profile from './Components/Profile';
import CustomerProfile from './Components/Customer/DashboardCustomer';
import Footer from './Components/Footer';
import Registration from './Components/Registration';
import Login from './Components/Login';
import ViewCarList from './Components/Customer/ViewCarList';
import Notice from './Components/Customer/Notice';
import Logout from './Components/Logout';
import HomeNave from './Components/HomeNave';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import DashboardCustomer from './Components/Customer/DashboardCustomer';

var token=null;
if(localStorage.getItem('user')){
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.access_token;
}
axios.defaults.headers.common["Authorization"] = token;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main>
        <Routes>
          <Route exact path="/"element={<Home/>}/>
          <Route exact path="/registration"element={<Registration/>}/>
          <Route exact path="/login"element={<Login/>}/>
          <Route exact path="/dashboard_customer"element={<DashboardCustomer/>}/>
          <Route exact path="/view_car_list"element={<ViewCarList/>}/>
          <Route exact path="/notice"element={<Notice/>}/>
          <Route exact path="/admin_home"element={<AdminHome/>}/>
          <Route exact path="/customer_home"element={<CustomerHome/>}/>
          <Route exact path="/renter_home"element={<RenterHome/>}/>
          <Route exact path="/logout"element={<Logout/>}/>
        </Routes>
    
    <Footer/>  
    </Main>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
