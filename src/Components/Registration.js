import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import HomeNave from "./HomeNave";
import 'bootstrap/dist/css/bootstrap.min.css';


const Registration = ()=>{
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
    const navigate = useNavigate();

    const loginStyle={
        border: "1px solid black",
        width: "30%",
        margin: "auto",
        marginBottom:"3%",
        padding: "10px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        minHeight:"100px", 
        borderRadius:"4px",
        boxShadow: "3px 3px 3px #9E9E9E"

    };
    
    const loginInputStyle={
        width:"100%",
        height:"30px",
        alignItems:"center",
        borderRadius:"4px",
        border:"2px solid #cc6060",
        color:"#000",
        fontsize:"16px",
        padding:"5px"

    }
    const loginButtonStyle={
        backgroundColor:"#282c34",
        borderRadius:"4px",
        alignItems:"center",
        border:"2px solid #282c34",
        color:"#fff",
        width:"30%",
        height:"40px",
        fontsize:"16px",
        cursor: "pointer"
    };


    const registrationSubmit= ()=>{
        var obj = {type: type, first_name: firstName, last_name: lastName, username: userName, email: email, dob: dob, gender: gender, phone_number: phoneNumber, address: address, nid_number: nidNumber, dl_number: dlNumber, password: password};
        axios.post("http://127.0.0.1:8000/api/registration",obj)
        .then(resp=>{
            var user = resp.data;
            console.log(user);
            alert("Registration Successful");
            navigate('/login');
            // var user = {userId: token.userid, access_token:token.token};
            // localStorage.setItem('user',JSON.stringify(user));
            // console.log(localStorage.getItem('user'));
        }).catch(err=>{
            alert("Please fill all the fields");
            console.log(err);
        });
    }
    return(
        <div>
            <HomeNave/>
            <br />
        <div style={loginStyle}>
            <h2>Registration</h2>
            <form>
                <br />
                
                <label>Choose Role  </label>  
                <input type="radio" value="Renter" name="type" onChange={(e)=>setType(e.target.value)} />  Renter
                <input type="radio" value="Customer" name="type" onChange={(e)=>setType(e.target.value)} />  Customer
                
                <br /><br />
                    

                <input style={loginInputStyle} placeholder="Enter first name" type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input> <br /><br />
                <input style={loginInputStyle} placeholder="Enter last name" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input> <br /><br />
                <input style={loginInputStyle} placeholder="Enter user name" type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}></input> <br /><br />
                <input style={loginInputStyle} placeholder="Enter email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input> <br /> <br />
                Date of Birth: <input type="date" value={dob} onChange={(e)=>setDob(e.target.value)}></input> <br /><br />
                <label>Gender</label>  
                <input type="radio" value="Male" name="gender" onChange={(e)=>setGender(e.target.value)} /> Male
                <input type="radio" value="Female" name="gender" onChange={(e)=>setGender(e.target.value)} /> Female
                <input type="radio" value="Other" name="gender" onChange={(e)=>setGender(e.target.value)} /> Other
                <br /><br />
                <input style={loginInputStyle} placeholder="Enter phone number" type="text" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}></input> <br /><br />
                <input style={loginInputStyle} placeholder="Enter address" type="text" value={address} onChange={(e)=>setAddress(e.target.value)}></input> <br /><br />
                <input style={loginInputStyle} placeholder="Enter nid number" type="text" value={nidNumber} onChange={(e)=>setNidNumber(e.target.value)}></input> <br /><br />
                <input style={loginInputStyle} placeholder="Enter dl number" type="text" value={dlNumber} onChange={(e)=>setDlNumber(e.target.value)}></input> <br /><br />
                <input style={loginInputStyle} placeholder="Enter password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input> <br /><br />

            </form>
            <br /><br />
                <button style={loginButtonStyle} onClick={registrationSubmit}>Register</button><br />
        </div>
        </div>

    )
}
export default Registration; 