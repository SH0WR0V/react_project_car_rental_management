import React from 'react';
import CustomerNavbar from './CustomerNavbar';
import axios from 'axios';
const CustomerHome=(props)=>
{
    // const user = JSON.parse(localStorage.getItem('user'));
    // const obj = {id: user.userId};
    // console.log(obj.data);
    // axios.get("http://127.0.0.1:8000/api/dashboard_customer/{id}",{params:{id:obj}})
    // .then(function (response) {
    //     // alert("Successfully Unblock...")
    //     console.log(response)
    // })
    // .catch(function (error) {
    //     alert(error)
    // })
    return(
        <div>
            <CustomerNavbar/>
            <h2>This is our Customer Home Page</h2>
        </div>
    )
}
export default CustomerHome;