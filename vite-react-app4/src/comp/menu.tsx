import { Button, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
const Menu = ()=>{

    return (
        <>
           <Navbar expand="lg" className="bg-body-tertiary">
           <Container>
         <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            
                            <Link to="/dashboard"><Button>Go to Dashboard</Button></Link>
                            
                            <NavDropdown title="More" id="basic-nav-dropdown">
                                
                                <NavDropdown.Item><Link to="/aboutus"> About</Link></NavDropdown.Item>
                               
                              
                                <NavDropdown.Item >  <Link to="/contactus">Contact Us</Link></NavDropdown.Item>
                                
                                
                                <NavDropdown.Item ><Link to="/counter">Counters Demo</Link></NavDropdown.Item>
                                
                                <NavDropdown.Item ><Link to="/griddata">Grid Data</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
      <br />
    <Outlet/>

      <br />
     
            
        </>
    );
};

export default Menu;