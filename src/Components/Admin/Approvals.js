import Button from 'react-bootstrap/Button'
import React from "react";
import { useEffect,useState } from "react";
import axios  from "axios";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adminnav from './nav';
const Approvals=()=>{
    const [approvel, setApprovel] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
       axios.get("http://localhost:8000/api/Admin_Approval")
       .then((result) => {
        console.log(result)
        setApprovel(result.data);
       })
       .catch((error)=>{
        
       });
    },[count]);
    const aADD=(id)=>()=>{
        setCount(count + 1)
        console.log(id);
        axios.get("http://localhost:8000/api/approv_add/{id}",{params:{id:id}})
        .then(function (response) {
            alert("Successfully Add")
            console.log(response)
        })
        .catch(function (error) {
            alert(error)
        })
    }

    const aDelete=(id)=>()=>{
        setCount(count + 1)
        console.log(id);
        axios.get("http://localhost:8000/api/approv_delete/{id}",{params:{id:id}})
        .then(function (response) {
            alert("Successfully Delete")
            console.log(response)
        })
        .catch(function (error) {
            alert(error)
        })
    }
    return(
        <div>
            <Adminnav/>
            <h1>This Is Approval Page</h1>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Details</th>
                    <th>Rent Date</th>
                    <th>Service ID</th>
                    <th>Payment Details</th>
                    <th>Action</th>
                    <th></th>
                </tr>
            </thead>
                    <tbody>
                        {
                            approvel.map(post=>(
                                    <tr key={post.id}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="ms-3">
                                                    <p >Renter Approvel ID  : { post.renter_app_id}</p>
                                                    <p >Renter Name         : { post.renter_name }</p>
                                                    <p >Renter ID           : {  post.renter_id }</p>
                                                    <p >Customer Name       : {  post.customer_name }</p>
                                                    <p >Customer ID         : {  post.customer_id }</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{ post.rent_date }</p>
                                        </td>
                                        <td>
                                            <p>{ post.service_id }</p>
                                        </td>
                                        <td>
                                            <p>Payment Number   : { post.payment_no }</p>
                                            <p>Rent Price       : { post.rent_price }</p>
                                        </td>
                                        <td>
                                        <Button onClick={aADD(post.id)} variant="primary">APPROVE</Button>
                                        </td>
                                        <td>
                                        <Button onClick={aDelete(post.id)} variant="danger">DENY</Button>
                                        </td>
                                    </tr>
                                    ))
                        }
                    </tbody>
            </Table>
        </div>
    )
}
export default Approvals;