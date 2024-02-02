import{ Container, Row, Col ,Card } from 'react-bootstrap';
import { GrGroup } from "react-icons/gr";
import { SlBadge } from "react-icons/sl";
import { GiAstronautHelmet } from "react-icons/gi";
import { MdOutlineInterpreterMode } from "react-icons/md";
function Clients() {
    return (
        <div className='mt-5'>
            <Container>

                <Row className='justify-content-center'>
                    <Col className='justify-content-center d-flex' md lg={3}>
                        <Card style={{ width: '18rem', textAlign: 'center', padding: '46px 20px 54px 20px', border: 'none' }}>
                            <div className='counter-icon m-auto'><i><MdOutlineInterpreterMode /></i></div>
                            <Card.Title className='mt-4 fs-2 font-weight-bolder text-dark'> 2 4 0 </Card.Title>
                            <Card.Body className='m-0 p-0'>
                                <Card.Text className='counter-text'>
                                    <p className='m-0 p-0'>
                                        Our Team
                                    </p>
                                    <h6>________</h6>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='justify-content-center d-flex' md lg={3}>
                        <Card style={{ width: '18rem', textAlign: 'center', padding: '46px 20px 54px 20px', border: 'none' }}>
                            <div className='counter-icon m-auto'><i><GrGroup /></i></div>
                            <Card.Title className='mt-4 fs-2 font-weight-bolder text-dark'> 1 2 6 0 0 </Card.Title>
                            <Card.Body className='m-0 p-0'>
                                <Card.Text className='counter-text'>
                                    <p className='m-0 p-0'>
                                        Happy Clients
                                    </p>
                                    <h6>________</h6>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='justify-content-center d-flex' md lg={3}>
                        <Card style={{ width: '18rem', textAlign: 'center', padding: '46px 20px 54px 20px', border: 'none' }}>
                            <div className='counter-icon m-auto'><i><GiAstronautHelmet /></i></div>
                            <Card.Title className='mt-4 fs-2 font-weight-bolder text-dark'> 1 1 8 0 0 </Card.Title>
                            <Card.Body className='m-0 p-0'>
                                <Card.Text className='counter-text'>
                                    <p className='m-0 p-0'>
                                        Finished Projects
                                    </p>
                                    <h6>________</h6>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='justify-content-center d-flex' md lg={3}>
                        <Card style={{ width: '18rem', textAlign: 'center', padding: '46px 20px 54px 20px', border: 'none' }}>
                            <div className='counter-icon m-auto'><i><SlBadge /></i></div>
                            <Card.Title className='mt-4 fs-2 font-weight-bolder text-dark'> 2 8 </Card.Title>
                            <Card.Body className='m-0 p-0'>
                                <Card.Text className='counter-text'>
                                    <p className='m-0 p-0'>
                                        Ongoing Projects
                                    </p>
                                    <h6>________</h6>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}
export default Clients;