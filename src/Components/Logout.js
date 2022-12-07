import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";



const Logout=()=>
{
    const navigate = useHistory();

    
    let user = JSON.parse(localStorage.getItem('user'));

    var obj = {token: user.access_token};

        axios.post("http://localhost:8000/api/logout",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            localStorage.removeItem('user');
        }).catch(err=>{
            console.log(err);
        });

    navigate.push('/login');
}
export default Logout;