import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Logout=()=>
{
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
}
export default Logout;