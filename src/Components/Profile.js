import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Profile=()=>
{
    const [data, setData] = useState("");

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>
        {
            setData(response.data[0].email);
        },[]);
        
    });
    return(
        <div>
            <h2>This is our Profile Page</h2>
            <br></br>
            {data}
        </div>
    )
}
export default Profile;