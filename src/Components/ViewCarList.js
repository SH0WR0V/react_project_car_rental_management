import React, {useState, useEffect} from "react";
import axios from "axios";
const ViewCarList = ()=>{

        const [carData, setCarData] = useState([]);
    
        useEffect(()=>{
            axios.get("http://localhost:8000/api/view_car_list")
            .then(resp=>{
                console.log(resp.data);
                setCarData(resp.data);
            }).catch(err=>{
                console.log(err);
            });
        },[]);

    return (
        <div>
        <table>
                    <tr>
                        <th>Car Name</th>
                        <th>Model Name</th>
                    </tr>
                {carData.map(carData=>(
                    <tr key={carData.id}>
                        <td >{carData.car_name}</td>
                        <td >{carData.car_model}</td>
                    </tr>
                ))}
            </table>
        </div>

    )

}
export default ViewCarList;