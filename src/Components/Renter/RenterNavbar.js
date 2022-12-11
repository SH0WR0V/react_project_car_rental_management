import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import React, {Components} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function RenterNavbar() {
    const navigate = useNavigate();
    const goProfile=()=>{
      navigate("/dashboard_renter");
    }
   
    const goNotice=()=>{
      navigate("/notice");
    }
    const goLogOut=()=>{
        navigate("/logout");
    }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
    
            <Button variant="outline-success" onClick={goLogOut}>Logout</Button>
      </Container>
    </Navbar>
  );
}

export default RenterNavbar;