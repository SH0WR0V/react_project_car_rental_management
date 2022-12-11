import Button from 'react-bootstrap/Button'
import React from "react";
import { useEffect,useState } from "react";
import axios  from "axios";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adminnav from './nav';
const CarList=()=>{
    const [carList, setCarList] = useState([]);
    const [sta, setStatus] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
       axios.get("http://127.0.0.1:8000/api/Cars_List")
       .then((result) => {
            var token = result.data;
            setCarList(token);
       })
       .catch((error)=>{
            alert(error)
       });
    },[count]);

    const Dcar=(id)=>()=>{
        console.log(id);
        axios.get("http://127.0.0.1:8000/api/Delete_Car_By_Admin/{id}",{params:{id:id}})
        .then(function (response) {
            setCount(count + 1)
            alert("Successfully Delete...")
            console.log(response)
        })
        .catch(function (error) {
            alert(error)
        })
    }
    return(
        <div>
            <Adminnav/>
            <h1>This Is Car List Page</h1>
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
                            carList.map(post=>(
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
                                        <Button variant="danger"onClick={Dcar(post.id)}> DELETE</Button>
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
export default CarList;