import React from 'react';
import {Link} from 'react-router-dom'
const Navbar=()=>
{
    return(
        <div>
            <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to="/registration">Registration</Link>&nbsp;&nbsp;
            <Link to="/login">Login</Link>&nbsp;&nbsp;
            <Link to="/admin_home">Admin Home</Link>&nbsp;&nbsp;
            <Link to="/customer_home">Customer Home</Link>&nbsp;&nbsp;
            <Link to="/renter_home">Renter Home</Link>&nbsp;&nbsp;
            <Link to="/profile">Profile</Link>&nbsp;&nbsp;
            <Link to="/products">Products</Link>&nbsp;&nbsp;
            <Link to="/view_car_list">View Cars</Link>&nbsp;&nbsp;
            <Link to="/logout">Logout</Link>&nbsp;&nbsp;
        </div>
    )
}
export default Navbar;