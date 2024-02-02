import{ Container, Row, Col ,Card } from 'react-bootstrap';
import { MdLocalLaundryService } from "react-icons/md";
import { FaLaptopHouse } from "react-icons/fa";
import { GiAstronautHelmet } from "react-icons/gi";
import { GiTowTruck } from "react-icons/gi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { AiTwotoneInsurance } from "react-icons/ai";
function SecondCard() {
    return (
        <div className="what-img">
            <Container>
                <Row className='text-white text-center'>
                    <Col className='what-main'><h2>What Are You Doing ?</h2></Col>
                </Row>
                <Row>
                    <Col lg={3} className='mx-auto mb-md-3'>
                        <Card className='border'>
                            <div className='what-icon m-auto'><i><MdLocalLaundryService /></i></div>
                            <Card.Body>
                                <Card.Text>
                                    <div className='what-text'>
                                        <h3>Architectural Consulting</h3>
                                        <p>We provide services with our experienced architects who are experts in their fields for architectural consultancy needs.</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} className='mx-auto mb-md-3'>
                        <Card className='border'>
                            <div className='what-icon m-auto'><i><GiAstronautHelmet /></i></div>
                            <Card.Body>
                                <Card.Text>
                                    <div className='what-text'>
                                        <h3>Architectural Consulting</h3>
                                        <p>We provide services with our experienced architects who are experts in their fields for architectural consultancy needs.</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} className='mx-auto mb-md-3'>
                        <Card className='border'>
                            <div className='what-icon m-auto'><i><FaLaptopHouse /></i></div>
                            <Card.Body>
                                <Card.Text>
                                    <div className='what-text'>
                                        <h3>Architectural Consulting</h3>
                                        <p>We provide services with our experienced architects who are experts in their fields for architectural consultancy needs.</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col lg={3} className='mx-lg-auto mb-md-3'>
                        <Card className='border'>
                            <div className='what-icon m-auto'><i><GiTowTruck /></i></div>
                            <Card.Body>
                                <Card.Text>
                                    <div className='what-text'>
                                        <h3>Architectural Consulting</h3>
                                        <p>We provide services with our experienced architects who are experts in their fields for architectural consultancy needs.</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} className='mx-lg-auto mb-md-3'>
                        <Card className='border'>
                            <div className='what-icon m-auto'><i><HiMiniComputerDesktop /></i></div>
                            <Card.Body>
                                <Card.Text>
                                    <div className='what-text'>
                                        <h3>Architectural Consulting</h3>
                                        <p>We provide services with our experienced architects who are experts in their fields for architectural consultancy needs.</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} className='mx-lg-auto mb-md-3'>
                        <Card className='border'>
                            <div className='what-icon m-auto'><i><AiTwotoneInsurance /></i></div>
                            <Card.Body>
                                <Card.Text>
                                    <div className='what-text'>
                                        <h3>Architectural Consulting</h3>
                                        <p>We provide services with our experienced architects who are experts in their fields for architectural consultancy needs.</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}
export default SecondCard;