import React, {useState, useEffect} from "react";
import axios from "axios";
import Adminnav from "./nav";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserAddByAdmin = ()=>{
    const navigate=useNavigate();
    let[token, setToken]= useState("");
    let[type, setType] = useState("");
    let[firstName, setFirstName] = useState("");
    let[lastName, setLastName] = useState("");
    let[userName, setUserName] = useState("");
    let[email, setEmail] = useState("");
    let[dob, setDob] = useState("");
    let[gender, setGender] = useState("");
    let[phoneNumber, setPhoneNumber] = useState("");
    let[address, setAddress] = useState("");
    let[nidNumber, setNidNumber] = useState("");
    let[dlNumber, setDlNumber] = useState("");
    let[password, setPassword] =useState("");


    const registrationSubmit= ()=>{
        var obj = {type: type, first_name: firstName, last_name: lastName, username: userName, email: email, dob: dob, gender: gender, phone_number: phoneNumber, address: address, nid_number: nidNumber, dl_number: dlNumber, password: password};
        axios.post("http://127.0.0.1:8000/api/Users_Add_By_Admin",obj)
        .then(resp=>{
            var user = resp.data;
            console.log(user);
            alert("Registration Successful");
            navigate(-1);
            // var user = {userId: token.userid, access_token:token.token};
            // localStorage.setItem('user',JSON.stringify(user));
            // console.log(localStorage.getItem('user'));
        }).catch(err=>{
                alert("something worng..");
                console.log(err);
        });


    }
    return(
        <div>
        <Adminnav/>
        <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form>
          <Row>
          <Col sm={4} className="mb-3">
              <Form.Group className="mb-2">
                <Form.Label>Choose Role</Form.Label>
                <Form.Select id="Role" defaultValue="0" required name="type" onChange={(e)=>setType(e.target.value)} >
                  <option required value="" defaultChecked>Choose Role</option>
                  <option required value="Renter">Renter</option>
                  <option required value="Customer">Customer</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your first name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control required type="text" placeholder="Also your last name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="gender" required>
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="0" name="gender" onChange={(e)=>setGender(e.target.value)}>
                  <option value="">Gender</option>
                  <option  value="Male" >Male</option>
                  <option  value="Female" >Female</option>
                  <option  value="Other">Other</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="birthday" required>
                <Form.Label>Birthday</Form.Label>
                    <InputGroup>
                    <input type="date" value={dob} onChange={(e)=>setDob(e.target.value)}></input>
                    </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="name@company.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone" required>
                <Form.Label>Phone</Form.Label>
                <Form.Control required type="number" placeholder="+88017 *** *** *"  value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Username</Form.Label>
                <Form.Control required type="text" placeholder="Enter Your User Name" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
              </Form.Group>
            </Col>
          </Row>

          <h5 className="my-4">Address</h5>
          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="address" required>
                <Form.Label>Address</Form.Label>
                <Form.Control required type="text" placeholder="Enter your home address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={3} className="mb-3">
              <Form.Group id="DLN" required>
                <Form.Label>Driving License Number</Form.Label>
                <Form.Control required type="text" placeholder="Driving License Number" value={dlNumber} onChange={(e)=>setDlNumber(e.target.value)}/>
              </Form.Group>
            </Col>
            
            <Col sm={3} className="mb-3">
              <Form.Group id="NID" required>
                <Form.Label>NID</Form.Label>
                <Form.Control required type="number" placeholder="National ID Numder" value={nidNumber} onChange={(e)=>setNidNumber(e.target.value)}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={4} className="mb-3">
              <Form.Group id="DLN" required>
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <div className="mt-3">
            <Button variant="primary" type="submit" onClick={registrationSubmit}>ADD</Button>
        </div>
      </Card.Body>
    </Card>
    </div>

    )
}
export default UserAddByAdmin; 