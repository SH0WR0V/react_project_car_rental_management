import React from 'react';
import {Link} from 'react-router-dom'
const Navbar=()=>
{
    return(
        <div>
            <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to="/profile">Profile</Link>&nbsp;&nbsp;
            <Link to="/products">Products</Link>&nbsp;&nbsp;
        </div>
    )
}
export default Navbar;