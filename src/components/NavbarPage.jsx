import React from "react";
import Edittext from "./Edittext";
import Profile from "./Profile";
import Home from "./Home";
import Profile1 from "./Profile1";
import DriveCar from "./ImportantConcept";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FetchApi from "./FetchApi";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
function NavbarPage() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Edittext">Edit Text</Nav.Link>
              <Nav.Link href="/Profile">Profile</Nav.Link>
              <Nav.Link href="/Profile1">Profile 1</Nav.Link>
              <Nav.Link href="/ImportantConcept">Drive Car</Nav.Link>
              <Nav.Link href="/FetchApi">Fetch Api</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Edittext" element={<Edittext />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Profile1" element={<Profile1 />} />
          <Route path="/ImportantConcept" element={<DriveCar />} />
          <Route path="/FetchApi" element={<FetchApi />} />
        </Routes>
      </Router>
    </>
  );
}

export default NavbarPage;