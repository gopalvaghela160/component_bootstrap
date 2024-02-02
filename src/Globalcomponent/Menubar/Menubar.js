import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { LuPhoneCall } from "react-icons/lu";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Menubar() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary px-4">
                <Container fluid>
                    <Navbar.Brand href="#"><img className='logo-img' src={require(`./img/logo.png`)}></img></Navbar.Brand>
        
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll" className='ms-5'>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            // style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className='me-4 fw-bold  nav-text' as={Link} to='/'> Home</Nav.Link>
                            <Nav.Link href="#action2" className='me-4 fw-bold  nav-text'as={Link} to='/about'>About Us</Nav.Link>
                            <Nav.Link href="#action2" className='me-4 fw-bold  nav-text' as={Link} to='/Services'>Servies</Nav.Link>
                            {/* <NavDropdown title="Services" id="navbarScrollingDropdown" className='me-4 fw-bold nav-text'>
                                <NavDropdown.Item href="#action3" className='me-4 fw-bold nav-text'>Projects</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">

                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link href="#action2" className='me-4 fw-bold nav-text' as={Link} to='/projects'>Projects</Nav.Link>
                            <Nav.Link href="#action2" className='me-4 fw-bold nav-text'as={Link} to='/Clients'>Clients</Nav.Link>
                            <Nav.Link href="#action2" className='me-4 fw-bold nav-text'>Blog</Nav.Link>
                            <Nav.Link href="#action2" className='me-4 fw-bold nav-text'>Contact</Nav.Link>

                            {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
                        </Nav>
                        {/* <Form className="d-flex"> */}


                        {/* <Button variant="outline-success">Search</Button> */}
                        {/* </Form> */}
                        <div className='nav-button d-xl-block d-none '>
                            <button> <i><LuPhoneCall></LuPhoneCall></i>+1 (234) 567 89 10</button>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar></>

    );

}
export default Menubar;