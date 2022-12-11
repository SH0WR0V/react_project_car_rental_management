import Button from 'react-bootstrap/Button'
import React from "react";
import { useEffect,useState } from "react";
import axios  from "axios";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adminnav from './nav';
import { useNavigate } from 'react-router-dom';
const RenterList=()=>{
    const navigation = useNavigate();
    const [renter, serRenter] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
       axios.get("http://127.0.0.1:8000/api/Renter_List")
       .then((result) => {
        console.log(result)
        serRenter(result.data);
       })
       .catch((error)=>{
        alert(error)
       });
    },[count]);
    const Bruser=(id)=>()=>{
        console.log(id);
        axios.get("http://127.0.0.1:8000/api/Block_Users_List/{id}",{params:{id:id}})
        .then(function (response) {
            setCount(count + 1)
            alert("Successfully block...")
            console.log(response)
        })
        .catch(function (error) {
            alert(error)
        })
    }
    const Eruser=(id)=>()=>{
        alert(id);
    }
    const Vruser=(id)=>()=>{
        alert(id);
        axios.get("http://127.0.0.1:8000/api/User_Details/{id}", {params:{id:id}})
        .then(function (response) {
            var data = response.data;
            console.log(data)
            navigation("/SingleUserDetails");
        })
        .catch(function (error) {
            alert(error);
        })
        // navigation('/SingleUserDetails/',{id})
    }
    return(
        <div>
            <Adminnav/>
            <h1>This Is Renter List </h1>
             <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Profile Pic</th>
                        <th>Personal Info</th>
                        <th>Details</th>
                        <th>Address</th>
                        <th>NID</th>
                        <th>DL number</th>
                        <th>Position</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            renter.map(post=>(
                                    <tr key={post.id}>
                                        <td>
                                        <img src={post.pp} alt="foo is coming "/>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={post.pp}
                                                    alt=""
                                                    className="rounded-circle"
                                                    />
                                                <div className="ms-3">
                                                    <p >Name : { post.first_name +" "+ post.last_name}</p>
                                                    <p >Username : { post.username }</p>
                                                    <p >Email : {  post.email }</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>Data Of Birth : { post.dob }</p>
                                            <p>Gender : { post.gender}</p>
                                            <p>Contact Number : { post.phone_number }</p>
                                        </td>
                                        <td>
                                            <p>{ post.address }</p>
                                        </td>
                                        <td>
                                            <p>{ post.nid_number }</p>
                                        </td>
                                        <td>
                                            <span>{  post.dl_number }</span>
                                        </td>
                                        <td>{  post.type }</td>
                                        <td>
                                        <Button variant="primary" onClick={Eruser(post.id)}> EDIT</Button>
                                        </td>
                                        <td>
                                        <Button variant="danger" onClick={Bruser(post.id)}> BLOCK</Button>
                                        </td>
                                        <td>
                                        <Button variant="primary" onClick={Vruser(post.id)}>VIEW</Button>
                                        </td>
                                    </tr>
                                    ))
                        }
                    </tbody>
            </Table>
        </div>
    )
}
export default RenterList;