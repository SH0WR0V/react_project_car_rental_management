import React, {useState, useEffect} from "react";
import axios from "axios";
import CustomerNavbar from "./CustomerNavbar";
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const ManageMyPost = ()=>{

    const navigate = useNavigate();


        const [notice, setNotice] = useState([]);

        const loginButtonStyle={
            backgroundColor:"#282c34",
            borderRadius:"4px",
            alignItems:"center",
            border:"2px solid #282c34",
            color:"#fff",
            width:"100%",
            height:"40px",
            fontsize:"16px",
            cursor: "pointer"
    
        };

        
    
        useEffect(()=>{
            axios.get("http://localhost:8000/api/my_posts")
            .then(resp=>{
                console.log(resp.data);
                setNotice(resp.data);
            }).catch(err=>{
                console.log(err);
            });
        },[]);

        const dNotice=(id)=>()=>{
            console.log(id);
            axios.get("http://127.0.0.1:8000/api/my_posts_delete/{id}",{params:{id:id}})
            .then(function (response) {
                alert("Deleted Successfully");
                console.log(response);
                navigate('/dashboard_customer');
            })
            .catch(function (error) {
                alert(error)
            })
        }

    return (
        <div>
            <CustomerNavbar/>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Post Date</th>
          <th>Post Details</th>

        </tr>
      </thead>
                {notice.map(notice=>(
                    <tr key={notice.id}>
                        <td >{notice.post_date}</td>
                        <td >{notice.post_text}</td>
                        <td><button style={loginButtonStyle} onClick={dNotice(notice.id)}>Delete</button><br /></td>
                    </tr>
                ))}
            </Table>
        </div>

    )

}
export default ManageMyPost;