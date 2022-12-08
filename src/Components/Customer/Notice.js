import React, {useState, useEffect} from "react";
import axios from "axios";
import CustomerNavbar from "./CustomerNavbar";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
const Notice = ()=>{

        const [notice, setNotice] = useState([]);
    
        useEffect(()=>{
            axios.get("http://localhost:8000/api/notice")
            .then(resp=>{
                console.log(resp.data);
                setNotice(resp.data);
            }).catch(err=>{
                console.log(err);
            });
        },[]);

    return (
        <div>
            <CustomerNavbar/>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Notice Date</th>
          <th>Notice</th>

        </tr>
      </thead>
                {notice.map(notice=>(
                    <tr key={notice.id}>
                        <td >{notice.notice_date}</td>
                        <td >{notice.notice}</td>
                    </tr>
                ))}
            </Table>
        </div>

    )

}
export default Notice;