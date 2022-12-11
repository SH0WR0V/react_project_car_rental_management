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
    const loginStyle={
        width: "50%",
        margin: "auto",
        paddingTop: "50px",
        paddingBottom: "50px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        minHeight:"100px", 
    };
    return(
        <div>
            <CustomerNavbar/>
            <div style={loginStyle}>
            <h2>Welcome to Customer Home Page</h2>
            </div>
        </div>
    )
}
export default CustomerHome;