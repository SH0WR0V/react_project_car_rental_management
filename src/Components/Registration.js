import React, {useState, useEffect} from "react";
import axios from "axios";

const Registration = ()=>{
    let[token, setToken]= useState("");
    let[firstName, setFirstName] = useState("");
    let[lastName, setLastName] = useState("");
    let[userName, setUserName] = useState("");
    let[email, setEmail] = useState("");
    // let[dob, setDob] = useState("");
    let[gender, setGender] = useState("");
    let[phoneNumber, setPhoneNumber] = useState("");
    let[address, setAddress] = useState("");
    let[nidNumber, setNidNumber] = useState("");
    let[dlNumber, setDlNumber] = useState("");
    let[password, setPassword] =useState("");

    const registrationSubmit= ()=>{
        var obj = {first_name: firstName, last_name: lastName, username: userName, email: email, gender: gender, phone_number: phoneNumber, address: address, nid_number: nidNumber, dl_number: dlNumber, password: password};
        axios.post("http://127.0.0.1:8000/api/registration",obj)
        .then(resp=>{
            var user = resp.data;
            console.log(user);
            // var user = {userId: token.userid, access_token:token.token};
            // localStorage.setItem('user',JSON.stringify(user));
            // console.log(localStorage.getItem('user'));
        }).catch(err=>{
            console.log(err);
        });


    }
    return(
        <div>
            <form>
                First Name: <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input> <br />
                Last Name: <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input> <br />
                Username: <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}></input> <br />
                Email: <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input> <br />
                Gender: <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)}></input> <br />
                Phone Number: <input type="text" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}></input> <br />
                Address: <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}></input> <br />
                NidNumber: <input type="text" value={nidNumber} onChange={(e)=>setNidNumber(e.target.value)}></input> <br />
                DlNumber: <input type="text" value={dlNumber} onChange={(e)=>setDlNumber(e.target.value)}></input> <br />
                Password: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input> <br />

            </form>
                <button onClick={registrationSubmit}>Register</button>
        </div>

    )
}
export default Registration; 