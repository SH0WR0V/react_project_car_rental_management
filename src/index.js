import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home';
import AdminHome from './Components/AdminHome';
import CustomerHome from './Components/Customer/CustomerHome';
import RenterHome from './Components/RenterHome';
import Navbar from './Components/Customer/CustomerNavbar';
import Footer from './Components/Footer';
import Registration from './Components/Registration';
import Login from './Components/Login';
import DashboardCustomer from './Components/Customer/DashboardCustomer';
import ViewCarList from './Components/Customer/ViewCarList';
import ManageMyPost from './Components/Customer/ManageMyPost';
import PostForACar from './Components/Customer/PostForACar';
import Notice from './Components/Customer/Notice';
import Logout from './Components/Logout';
import HomeNave from './Components/HomeNave';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
import axios from 'axios';

//Admin
import Approvals from './Components/Admin/Approvals';
import BlockUser from './Components/Admin/Block_User';
import CarAddByAdmin from './Components/Admin/Car_Add_By_Admin';
import CarList from './Components/Admin/Car_List';
import CustomerList from './Components/Admin/Customer_List';
import Messages from './Components/Admin/Messages';
import NoticeList from './Components/Admin/Notice_List';
import Notices from './Components/Admin/Notices';
import PostManage from './Components/Admin/Post_Manage';
import AdminProfile from './Components/Admin/profile';
import RentHistory from './Components/Admin/Rent_History';
import RenterList from './Components/Admin/Renter_List';
import Reviews from './Components/Admin/Reviews';
import UserAddByAdmin from './Components/Admin/User_Add_By_Admin';
import UserDetails from './Components/Admin/UserDetails';

//Renter
import Profile from './Components/Renter/Profile';
import RViewCarList from './Components/Renter/RViewCarList';
import RNotice from './Components/Renter/RNotice';
import AddCar from './Components/Renter/AddNewCar';
import DashboardRenter from './Components/Renter/DashboardRenter';

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
          <Route exact path="/post_for_a_car"element={<PostForACar/>}/>
          <Route exact path="/manage_my_post"element={<ManageMyPost/>}/>
          <Route exact path="/notice"element={<Notice/>}/>
          <Route exact path="/admin_home"element={<AdminHome/>}/>
          <Route exact path="/customer_home"element={<CustomerHome/>}/>
          <Route exact path="/renter_home"element={<RenterHome/>}/>
          <Route exact path="/logout"element={<Logout/>}/>

          {/* Admin */}
          <Route exact path="/adminprofile"element={<AdminProfile/>}/>
            <Route exact path="/Approvals" element={<Approvals/>}/>
            <Route exact path="/BlockUser" element={<BlockUser/>}/>
            <Route exact path="/CarAddByAdmin" element={<CarAddByAdmin/>}/>
            <Route exact path="/CarList" element={<CarList/>}/>
            <Route exact path="/CustomerList" element={<CustomerList/>}/>
            
            <Route exact path="/Messages" element={<Messages/>}/>
            <Route exact path="/NoticeList" element={<NoticeList/>}/>
            <Route exact path="/Notices" element={<Notices/>}/>
            <Route exact path="/PostManage" element={<PostManage/>}/>
            <Route exact path="/RentHistory" element={<RentHistory/>}/>
            <Route exact path="/RenterList" element={<RenterList/>}/>
            <Route exact path="/Reviews" element={<Reviews/>}/>
            <Route exact path="/UserAddByAdmin" element={<UserAddByAdmin/>}/>
			<Route exact path="/SingleUserDetails/:userID" element={<UserDetails/>}/>

          {/* Renter */}
          <Route exact path="/dashboard_renter" element={<DashboardRenter/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/notice" element={<RNotice/>}/>
          <Route exact path="/add_new_car" element={<AddCar/>}/>
        <Route exact path="/RCarlist" element={<RViewCarList/>}/>
        </Routes>
    
    <Footer/>  
    </Main>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
