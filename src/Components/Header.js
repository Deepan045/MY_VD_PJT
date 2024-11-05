import React from "react";
import{Navbar,Nav,NavDropdown,Container,Image} from "react-bootstrap"
import{LinkContainer} from 'react-router-bootstrap';

const Header=()=>{
     return(
        <>
         <header>
            <Navbar className="navbar-style" expand="lg">
                <Container>
                    <LinkContainer to='/'>
                          <Navbar.Brand href="/">
                          <Image className="logo-img-style" src='images/logo.jpg' alt='Video' roundedCircle/>
                          <h6 className="logo-text-style">Visvesvaraya Technological University,Belagavi</h6>
                         </Navbar.Brand>
                    </LinkContainer>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                 <Nav className="ml-auto">
                    <LinkContainer to='/'>
                    <Nav.Link href="/">Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/about'>
                    <Nav.Link href="#link">About Us</Nav.Link>
                    </LinkContainer>
                    
                    <NavDropdown title="Academic" id="basic-nav-dropdown">
                        <LinkContainer to='/admission'>
                        <NavDropdown.Item href="#">Admission</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/circulars/notification'>
                        <NavDropdown.Item href="#">Circulars & Notification</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to ='/certificateissused'>
                        <NavDropdown.Item href="#">Certificate Issused</NavDropdown.Item>
                        </LinkContainer>
                       
                    </NavDropdown>
                    <NavDropdown title="Examination" id="basic-nav-dropdown">
                        <LinkContainer to='/examguidlines'>
                        <NavDropdown.Item href="#">Examination Guidlines</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/examapplication'>
                        <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/results'>
                        <NavDropdown.Item href="#">Results</NavDropdown.Item>
                        </LinkContainer>
                        
                    </NavDropdown>
                    <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
                        <LinkContainer to='/civil'>
                        <NavDropdown.Item href="#">Civil Engg</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/cse'>
                        <NavDropdown.Item href="#">Computer Science Engg</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/ece'>
                        <NavDropdown.Item href="#">Electronics & Communication Engg</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/eee'>
                        <NavDropdown.Item href="#">Electrical & Electronics Engg</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/mech'>
                        <NavDropdown.Item href="#">Mechanical Engg</NavDropdown.Item>
                        </LinkContainer>
                        
                        
                    </NavDropdown>
                    <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                        <LinkContainer to='/loginasadmin'>
                        <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item>
                        </LinkContainer>
                        
                    </NavDropdown>
                    </Nav>
                  
                </Container>

            </Navbar>
         </header>
        </>
     )
}
export default Header   