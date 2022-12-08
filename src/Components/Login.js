import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import HomeNave from "./HomeNave";
import 'bootstrap/dist/css/bootstrap.min.css';
// import UserProfile from "./CustomerSession";


const Login = ()=>{
    let[token, setToken]= useState("");
    let[email, setEmail] = useState("");
    let[password, setPassword] =useState("");
    const navigate = useNavigate();

    const loginStyle={
        border: "1px solid black",
        width: "20%",
        margin: "auto",
        padding: "10px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        minHeight:"100px", 
        borderRadius:"4px",
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

    const loginSubmit= ()=>{
        var obj = {email: email, password: password};
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{

            var token = resp.data;
            var user = {userId: token.userid, type:token.type, access_token:token.token};
            // var abc=UserProfile.setName(user.userId);
            // console.log(abc);
            localStorage.setItem('user',JSON.stringify(user));
            console.log(localStorage.getItem('user'));
            // navigate.push('/view_car_list');

            if(token.type=="Admin"){
                navigate('/admin_home');
            }
            else if(token.type=="Customer"){
                navigate('/customer_home');
            }
            else if(token.type=="Renter"){
                navigate('/renter_home');
            }
            
        }).catch(err=>{
            console.log(err);
        });


    }
    return(

       
        <div>
            <HomeNave/>
            <br />
        <div style={loginStyle}>
            
            
			<h2>Login</h2>
            
            <form>
                <br />
                <input style={loginInputStyle} type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br /> <br />
                <input style={loginInputStyle} type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br />
                <br /><br />
            </form>
            
                <button style={loginButtonStyle} onClick={loginSubmit}>Login</button><br />
        </div>
        </div>

    )
}
export default Login; 