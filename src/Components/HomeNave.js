import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import React, {Components} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function HomeNave() {
    const navigate = useNavigate();
    const goLogin=()=>{
        navigate("/login");
    }
    const goRegistration=()=>{
        navigate("/registration");
    }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
            <Button variant="outline-success" onClick={goLogin}>Login</Button>
            <Button variant="outline-success" onClick={goRegistration}>Registration</Button>
      </Container>
    </Navbar>
  );
}

export default HomeNave;