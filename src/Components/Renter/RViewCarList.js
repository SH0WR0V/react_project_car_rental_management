import Button from 'react-bootstrap/Button'
import React from "react";
import { useEffect,useState } from "react";
import axios  from "axios";
import Table from 'react-bootstrap/Table';

import RenterNavbar from './RenterNavbar';

const Carlist=()=>
{
    const [carData, setCarData] = useState([]);
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        var obj = {id:user.userId};
        axios.post("http://localhost:8000/api/car_list",obj)
        .then((result) => {
         console.log(result)
         setCarData(result.data);
        })
        .catch((error)=>{
         alert(error)
        });
     },[]);
         return(
        <div>
            <RenterNavbar/>
           
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Car Pic</th>
                    <th>Car Details</th>
                    <th>Car Condition</th>
                    <th>Car Number</th>
                    <th>Rent Price</th>
                    <th>Car Owner Name</th>
                    <th>Rent Status</th>
                    <th></th>
                    <th>Action</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
            </thead>
                    <tbody>
                        {
                            carData.map(post=>(
                                    <tr key={post.id}>
                                        <td>
                                        <img src={post.pp} alt="loading"/>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="ms-3">
                                                <p >Car Name    : { post.car_name }</p>
                                                <p >Car Model   : { post.car_model }</p>
                                                <p >Car Type    : { post.car_type }</p>
                                                <p >Car Sit     : { post.sit_number }</p>
                                                <p >Car Buy Date: { post.car_buy_date }</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>
                                                {post.car_details}
                                            </p>
                                        </td>
                                        <td>

                                            <p>
                                                {post.car_number}
                                            </p>
                                            
                                        </td>
                                        <td>
                                            <p>
                                                {post.rent_price}
                                            </p>
                                            
                                        </td>
                                        <td>
                                            <p>
                                                {post.car_owner_name}
                                            </p>
                                        </td>
                                        <td>
                                            <p>
                                                {post.rent_status}
                                            </p>
                                        </td>
                                        <td></td>
                                        <td>
                                        <Button variant="primary"> EDIT</Button>
                                        </td>
                                        <td>
                                        <Button variant="danger"> DELETE</Button>
                                        </td>
                                        <td>
                                        <Button variant="primary">VIEW</Button>
                                        </td>
                                    </tr>
                                    ))
                        }
                    </tbody>
            </Table>
        </div>
    )
}
export default Carlist;