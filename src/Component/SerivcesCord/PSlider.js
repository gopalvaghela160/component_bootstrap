import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function PSlider() {
    return (
        <div>
            <Container>
                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="home" title="Interior Architecture Project">
                       
                        <Row>
                            
                            <Col>
                                <div class=' PsliderDtl position-relative' >
                                    <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
                                    <img src={require(`./img/p1.png`)} width={'100%'} />
                                    <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
                                </div>
                            </Col>
                            <Col>
                            <div class='PsliderDtl position-relative' >
                                    <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
                                    <img src={require(`./img/p2.png`)} width={'100%'} />
                                    <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div class=' PsliderDtl position-relative' >
                                    <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
                                    <img src={require(`./img/p1.png`)} width={'100%'} />
                                    <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
                                </div>
                            </Col>
                            <Col>
                            <div class=' PsliderDtl position-relative' >
                                    <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
                                    <img src={require(`./img/p2.png`)} width={'100%'} />
                                    <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div class=' PsliderDtl position-relative' >
                                    <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
                                    <img src={require(`./img/p1.png`)} width={'100%'} />
                                    <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
                                </div>
                            </Col>
                            <Col>
                            <div class=' PsliderDtl position-relative' >
                                    <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
                                    <img src={require(`./img/p2.png`)} width={'100%'} />
                                    <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
                                </div>
                            </Col>
                        </Row>

                    </Tab>
                    <Tab eventKey="profile" title="Furniture Design">
                    <Row>
                            <Col lg={6}>
                                <div class=' PsliderDtl position-relative' >
                                    <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
                                    <img src={require(`./img/p3.png`)} width={'100%'} />
                                    <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
                                </div>
                            </Col>
                            <Col lg={6}>
                            <div class=' PsliderDtl position-relative' >
                                    <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
                                    <img src={require(`./img/p4.png`)} width={'100%'} />
                                    <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
                                </div>
                            </Col>
                            <Col lg={6} className='m-auto'>
                            <div class=' PsliderDtl position-relative' >
                                    <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
                                    <img src={require(`./img/p5.png`)} width={'100%'} />
                                    <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="longer-tab" title="Architectural Project">
                    <Row>
                            <Col lg={6}>
                                <div class=' PsliderDtl position-relative' >
                                    <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
                                    <img src={require(`./img/p3.png`)} width={'100%'} />
                                    <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
                                </div>
                            </Col>
                            <Col lg={6}>
                            <div class=' PsliderDtl position-relative' >
                                    <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
                                    <img src={require(`./img/p4.png`)} width={'100%'} />
                                    <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
                                </div>
                            </Col>
                            <Col lg={6} className='m-auto'>
                            <div class=' PsliderDtl position-relative' >
                                    <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
                                    <img src={require(`./img/p5.png`)} width={'100%'} />
                                    <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                   
                </Tabs>
            </Container>
        </div>
    );
}
export default PSlider;