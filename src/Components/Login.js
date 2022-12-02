import React, {useState, useEffect} from "react";
import axios from "axios";

const Login = ()=>{
    let[token, setToken]= useState("");
    let[email, setEmail] = useState("");
    let[password, setPassword] =useState("");

    const loginSubmit= ()=>{
        var obj = {email: email, password: password};
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{
            var token = resp.data;
            var user = {userId: token.userid, access_token:token.token};
            localStorage.setItem('user',JSON.stringify(user));
            console.log(localStorage.getItem('user'));
        }).catch(err=>{
            console.log(err);
        });


    }
    return(
        <div>
            <form>
                <br />
                Email: <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br />
                Password: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br />

            </form>
                <button onClick={loginSubmit}>Login</button>
        </div>

    )
}
export default Login; 