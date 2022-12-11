import React from 'react';
import RenterNavbar from './RenterNavbar';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


const DashboardRenter=()=>
{
    const [ffile, setProfile] = useState([]);
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        var obj = {id:user.userId};
        axios.post("http://localhost:8000/api/dashboard_renter",obj)
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
            <RenterNavbar/>


            <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Profile Pic</th>
          <th scope='col'>User Details</th>
          <th scope='col'>Information</th>
          <th scope='col'>Address</th>
          <th scope='col'>NID</th>
          <th scope='col'>DL number</th>
          <th scope='col'>Position</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{ ffile.username }</p>
                <p className='text-muted mb-0'>{  ffile.email }</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{ ffile.first_name +" "+ ffile.last_name}</p>
           
          </td>
          <td>
             <p>{ ffile.dob }</p>
             <p>{ ffile.gender}</p>
             <p>{ ffile.phone_number }</p>
                                          
          </td>
          <td><p>{ ffile.address }</p></td>
          <td>
          <p>{ ffile.nid_number }</p>
          </td>

          <td>
          <p>{  ffile.dl_number }</p>
          </td>

          <td>
          <p>{  ffile.type }</p>
          </td>
          
          <td>
          <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
        
      </MDBTableBody>
    </MDBTable>
           


        </div>
    )
}

export default DashboardRenter;