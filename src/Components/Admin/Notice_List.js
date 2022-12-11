import Button from 'react-bootstrap/Button'
import React from "react";
import { useEffect,useState } from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import axios  from "axios";
import Adminnav from "./nav";
const NoticeList=()=>{
    const navigation = useNavigate();
    const [notice, serRenter] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
       axios.get("http://127.0.0.1:8000/api/Admin_Notice_list")
       .then((result) => {
        console.log(result)
        serRenter(result.data);
       })
       .catch((error)=>{
        alert(error)
       });
    },[count]);

    const eNotice=(id)=>()=>{
        // setCount(count + 1)
        // console.log(id);
        // axios.get("http://127.0.0.1:8000/api//{id}",{params:{id:id}})
        // .then(function (response) {
        //     console.log(response)
        // })
        // .catch(function (error) {
        //     alert(error)
        // })
        navigation('');
    }
    const dNotice=(id)=>()=>{
        setCount(count + 1)
        console.log(id);
        axios.get("http://127.0.0.1:8000/api/Admin_Notice_delete/{id}",{params:{id:id}})
        .then(function (response) {
            alert("Successfully Delete...")
            console.log(response)
        })
        .catch(function (error) {
            alert(error)
        })
    }

    const vNotice=(id)=>()=>{
        console.log(id);
        alert(id);
        axios.get("http://127.0.0.1:8000/api//{id}",{params:{id}})
        .then(function (res) {
            alert("View... ;-P")
        })
        .catch(function (err) {
            alert("something Worng...!")
        })
    }
    return(
        <div>
            <Adminnav/>
            <h1>This Is Notice List Page</h1>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Notice</th>
                    <th>Action</th>
                </tr>
            </thead>
                    <tbody>
                        {
                            notice.map(post=>(
                                    <tr key={post.id}>
                                        <td>
                                            <p>{ post.notice_date }</p>
                                        </td>
                                        <td>
                                            <p>{ post.notice }</p>
                                        </td>
                                        <td>
                                            <td>
                                                <td>
                                                <Button variant="primary" onClick={eNotice(post.id)}> EDIT</Button>
                                                </td>
                                            </td>
                                            <td>
                                                <td>
                                                <Button variant="danger" onClick={dNotice(post.id)}> DELETE</Button>
                                                </td>
                                            </td>
                                            <td>
                                                <td>
                                                <Button variant="primary" onClick={vNotice(post.id)} >VIEW</Button>
                                                </td>
                                            </td>
                                        </td>
                                    </tr>
                                    ))
                        }
                    </tbody>
            </Table>
        </div>
    )
}
export default NoticeList;