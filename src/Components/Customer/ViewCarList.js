import React, {useState, useEffect} from "react";
import axios from "axios";
import CustomerNavbar from "./CustomerNavbar";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                    <tr key={carData.id}>
                        <td >{carData.car_name}</td>
                        <td >{carData.car_model}</td>
                        <td >{carData.car_details}</td>
                        <td >{carData.car_owner_name}</td>
                        <td >{carData.rent_price}</td>
                        <td ><a href="">Details</a></td>
                    </tr>
                ))}
            </Table>
        </div>

    )

}
export default ViewCarList;