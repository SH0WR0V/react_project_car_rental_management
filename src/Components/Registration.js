import React, {useState, useEffect} from "react";
import axios from "axios";

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


    const registrationSubmit= ()=>{
        var obj = {type: type, first_name: firstName, last_name: lastName, username: userName, email: email, dob: dob, gender: gender, phone_number: phoneNumber, address: address, nid_number: nidNumber, dl_number: dlNumber, password: password};
        axios.post("http://127.0.0.1:8000/api/registration",obj)
        .then(resp=>{
            var user = resp.data;
            console.log(user);
            alert("Registration Successful");
           
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
            <form>
                <br />
                
                <label>Choose Role</label>  
                <input type="radio" value="Renter" name="type" onChange={(e)=>setType(e.target.value)} /> Renter
                <input type="radio" value="Customer" name="type" onChange={(e)=>setType(e.target.value)} /> Customer
                
                <br />
                    

                First Name: <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input> <br />
                Last Name: <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input> <br />
                Username: <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}></input> <br />
                Email: <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input> <br />
                Date of Birth: <input type="date" value={dob} onChange={(e)=>setDob(e.target.value)}></input> <br />
                <label>Gender</label>  
                <input type="radio" value="Male" name="gender" onChange={(e)=>setGender(e.target.value)} /> Male
                <input type="radio" value="Female" name="gender" onChange={(e)=>setGender(e.target.value)} /> Female
                <input type="radio" value="Other" name="gender" onChange={(e)=>setGender(e.target.value)} /> Other
                <br />
                Phone Number: <input type="text" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}></input> <br />
                Address: <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}></input> <br />
                NidNumber: <input type="text" value={nidNumber} onChange={(e)=>setNidNumber(e.target.value)}></input> <br />
                DlNumber: <input type="text" value={dlNumber} onChange={(e)=>setDlNumber(e.target.value)}></input> <br />
                Password: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input> <br />

            </form>
            <br />
                <button onClick={registrationSubmit}>Register</button>
        </div>

    )
}
export default Registration; 