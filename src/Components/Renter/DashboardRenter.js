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
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBTypography,
    MDBInputGroup,
    MDBScrollbar,
  } from "mdb-react-ui-kit"

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
         

            <MDBContainer fluid className="py-5" style={{ backgroundColor: "#CDC4F9" }}>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard id="chat3" style={{ borderRadius: "15px" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
                  <div className="p-3">
                    <MDBInputGroup className="rounded mb-3">
                    
                    </MDBInputGroup>

                   
                      <MDBTypography listUnStyled className="mb-0">
                        <li className="p-2 border-bottom">
                          <a
                            href="#!"
                            className="d-flex justify-content-between"
                          >
                            <div className="d-flex flex-row">
                              <div>
                                  <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '60px', height: '60px' }}
                className='rounded-circle'
              />  <br/>  <br/>
                                
                              </div>
                              <div className="pt-1">
                                <p className="fw-bold mb-0"> { ffile.username }</p>
                                <p className="small text-muted">
                                {  ffile.type }
                                </p>
                              </div>

                           
                              
                            </div>
                            
                          </a>
                        </li>
                        

                        <li>
                            <Link to ="/profile" ><p>Profile</p></Link><br/>
                            <Link to ="/add_new_car"><p>Add New Car</p></Link><br/>
                            <Link to ="/RCarlist"><p>View Car List</p></Link><br/>
                            <Link to ="/notice"><p>Notice</p></Link><br/>
                            <Link to ><p>Add Car Video</p></Link><br/>
                            <Link to ><p>Videos</p></Link><br/>
                            <Link to ><p>History</p></Link><br/>
                          
                        </li>



                      </MDBTypography>
                    
                  </div>
                </MDBCol>
                
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>


        </div>
    )
}

export default DashboardRenter;