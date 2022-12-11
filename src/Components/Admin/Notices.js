import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adminnav from "./nav";


const Notices = ()=>{
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
        var obj = {notice: details};
        axios.post("http://localhost:8000/api/Notice",obj)
        .then(resp=>{
            var user = resp.data;
            console.log(user);
            alert(resp.data);
            navigate('/NoticeList');
        }).catch(err=>{
            alert("Please fill all the fields");
            console.log(err);
        });
    }
    return(
        <div>
            <Adminnav/>
            <br />
        <div style={loginStyle}>
            <h2>Notice Post</h2>
            
            <form>
                <br />
                <textarea style={textAreaStyle} placeholder="Write Something" value={details} onChange={(e)=>setDetails(e.target.value)}></textarea> <br /><br />
            </form>
            <br /><br />
                <button style={loginButtonStyle} onClick={postSubmit}>Post</button><br />
        </div>
        </div>

    )
}
export default Notices; 