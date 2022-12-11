import React, {useState, useEffect} from "react";
import axios from "axios";
import CustomerNavbar from "./CustomerNavbar";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const PostForACar = ()=>{
    let[token, setToken]= useState("");
    let[userName, setUserName] = useState("");
    let[type, setType] = useState("");
    let[details, setDetails] = useState("");
    
    const navigate = useNavigate();

    const loginStyle={
        border: "1px solid black",
        width: "20%",
        margin: "auto",
        marginBottom:"2%",
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
    const textAreaStyle={
        width:"100%",
        height:"100px",
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


    const postSubmit= ()=>{
        var obj = {poster_name:userName, poster_type:type, post_text: details};
        axios.post("http://127.0.0.1:8000/api/post_for_a_car",obj)
        .then(resp=>{
            var user = resp.data;
            console.log(user);
            alert("posted for a car successfully");
            navigate('/dashboard_customer');
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
            <CustomerNavbar/>
            <br />
        <div style={loginStyle}>
            <h2>Post for a car</h2>
            
            <form>
                <br />
 
                <input style={loginInputStyle} placeholder="Enter user name" type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} ></input> <br /><br />
                <input style={loginInputStyle} placeholder="Enter type" type="text" value={type} onChange={(e)=>setType(e.target.value)} ></input> <br /><br />
                <textarea style={textAreaStyle} placeholder="Write Something" value={details} onChange={(e)=>setDetails(e.target.value)}></textarea> <br /><br />
            </form>
            <br /><br />
                <button style={loginButtonStyle} onClick={postSubmit}>Post</button><br />
        </div>
        </div>

    )
}
export default PostForACar; 