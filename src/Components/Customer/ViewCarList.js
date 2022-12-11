import React, {useState, useEffect} from "react";
import axios from "axios";
import CustomerNavbar from "./CustomerNavbar";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

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

        const loginButtonStyle={
            backgroundColor:"#282c34",
            borderRadius:"4px",
            alignItems:"center",
            border:"2px solid #282c34",
            color:"#fff",
            width:"100%",
            height:"40px",
            fontsize:"16px",
            cursor: "pointer"
        };
        const navigate = useNavigate();


        const rentSubmit= (id, owner_id)=>()=>{
           
                let user = JSON.parse(localStorage.getItem('user'));
            var obj = {my:user.userId, client:owner_id, car:id};
            axios.post("http://localhost:8000/api/payment_done",obj)
            .then(resp=>{
                alert("Request Done");
            }).catch(err=>{
                alert("Please fill all the fields");
                console.log(err);
            });
           
        }

    return (
        <div>
            <CustomerNavbar/>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Car Name</th>
          <th>Car Model</th>
          <th>Car Details</th>
          <th>Car Owner Name</th>
          <th>Rent Price</th>
          <th>Action</th>

        </tr>
      </thead>
                {carData.map(carData=>(
                    <tr key={carData.id} >
                        <td>{carData.car_name}</td>
                        <td >{carData.car_model}</td>
                        <td >{carData.car_details}</td>
                        <td >{carData.car_owner_name}</td>
                        <td >{carData.rent_price}</td>
                        {/* <td ><a href="">Details</a></td> */}
                        <td ><button style={loginButtonStyle}>Details</button></td>
                        <td><button style={loginButtonStyle} onClick={rentSubmit(carData.id,carData.owner_id)}>Rent</button></td>
                    </tr>
                ))}
            </Table>
        </div>

    )

}
export default ViewCarList;