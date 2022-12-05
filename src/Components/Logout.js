import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";



const Logout=()=>
{
    const navigate = useHistory();

    
    const [data, setData] = useState("");

    useEffect(()=>{
        axios.put("http://localhost:8000/api/logout")
        .then((response)=>
        {
            setData(response.data);
          
        },[]).catch((err)=>{console.log(err);
        });
        
    });
    
    localStorage.removeItem('user');
    navigate.push('/login');
}
export default Logout;