import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ViewCarList=()=>
{
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/view_car_list")
        .then((response)=>
        {
            setData(response.data);
        }).catch((err)=>{console.log(err);
        },[]);
        
    });
    return(
        <div>
            <ul>
                {data.map(item=>(
                    <li key={item.id}>{item.car_name}</li> 
                ))}
            </ul>
        </div>
    )
}
export default ViewCarList;