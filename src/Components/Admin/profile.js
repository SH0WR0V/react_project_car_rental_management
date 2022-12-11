import React from "react";
import Adminnav from "./nav";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
const Profile=()=>{
    const [ffile, setProfile] = useState([]);
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        var obj = {id:user.userId};
        axios.post("http://localhost:8000/api/dashboard_admin",obj)
        .then((result) => {
         console.log(result)
         setProfile(result.data);
        })
        .catch((error)=>{
         alert(error)
        });
     },[]);
    return(
        <div>
            <Adminnav/>
            <h1>This Is Profile Page</h1>
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
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
                        
                                    <tr key={ffile.id}>
                                        <td>
                                        <img src={ffile.pp} />
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={ffile.pp}
                                                    alt=""
                                                    className="rounded-circle"
                                                    />
                                                <div className="ms-3">
                                                    <p >Name : { ffile.first_name +" "+ ffile.last_name}</p>
                                                    <p >Username : { ffile.username }</p>
                                                    <p >Email : {  ffile.email }</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>Data Of Birth : { ffile.dob }</p>
                                            <p>Gender : { ffile.gender}</p>
                                            <p>Contact Number : { ffile.phone_number }</p>
                                        </td>
                                        <td>
                                            <p>{ ffile.address }</p>
                                        </td>
                                        <td>
                                            <p>{ ffile.nid_number }</p>
                                        </td>
                                        <td>
                                            <span>{  ffile.dl_number }</span>
                                        </td>
                                        <td>{  ffile.type }</td>
                                    </tr>
                           
                        
                    </tbody>
            </Table>
        </div>
    )
}
export default Profile;