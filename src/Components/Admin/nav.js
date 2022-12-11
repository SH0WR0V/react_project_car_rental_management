import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {Components} from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Adminnav() {
  const navigate = useNavigate();
  const goLogout=()=>{
    navigate("/logout")
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand ><Link to="/">Home</Link></Navbar.Brand>
        <Navbar.Brand ><Link to="/AdminProfile">Profile</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/BlockUser">Block Users List</Nav.Link>
            <Nav.Link as={Link} to="/RenterList">Renter List</Nav.Link>
            <Nav.Link as={Link} to="/CustomerList">Customers List</Nav.Link>
            <Nav.Link as={Link} to="/CarList">Car List</Nav.Link>
            <Nav.Link as={Link} to="/Approvals">Approval</Nav.Link>
            <Nav.Link as={Link} to="/NoticeList">Notice List</Nav.Link>
            <Nav.Link as={Link} to="/Messages">Messages</Nav.Link>
            <NavDropdown title="Other" id="navbarScrollingDropdown">
              <NavDropdown.Item
              as={Link} to="/UserAddByAdmin">Users Add By Admin
            </NavDropdown.Item>
              <NavDropdown.Item
              as={Link} to="/CarAddByAdmin">Add Car By Admin
            </NavDropdown.Item>
              <NavDropdown.Item
              as={Link} to="/RentHistory">Rent History
            </NavDropdown.Item>
              <NavDropdown.Item
              as={Link} to="/Notices">Notice
            </NavDropdown.Item>
              <NavDropdown.Item
              as={Link} to="/PostManage">Post Manage
            </NavDropdown.Item>
              <NavDropdown.Item
              as={Link} to="/Reviews">Reviews Manage
            </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
           <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            
            <Button variant="outline-success" onClick={goLogout}>Logout</Button>
            {/* <Button variant="outline-success"><Nav.Link><Link to="/Login">Login</Link></Nav.Link></Button> */}
          </Form> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Adminnav;