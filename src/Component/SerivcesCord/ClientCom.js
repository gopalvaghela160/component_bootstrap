import { Container, Row, Col, Card } from 'react-bootstrap';
// import './SerivcesCord.css';
import { SlBadge } from "react-icons/sl";
import './SerivcesCord.css';
function ClientCom() {
    return (
        <div className=''>
            <Container>
                <Row className='text-white text-center mt-5 '>
                    <Col className='client-tital'>
                    <div className='counter-icon m-auto'><i><SlBadge /></i></div>
                        <h2 className='mt-4'>Our Customers Who Make Us</h2>
                        <p>We work day and night for our customers and speed up their business processes.   </p>
                    </Col>
                </Row>
                <Row className='d-flex gap-0 justify-content-center b-red'>
                    <Col className='d-flex justify-content-center client-img' xs={6} lg={2}>
                        <img src={require(`./img/asset 1.png`)} alt="" className='c-box' />
                    </Col>
                    <Col className='d-flex justify-content-center client-img' xs={6} lg={2}>
                        <img src={require(`./img/asset 2.png`)} alt="" className='c-box' />
                    </Col>
                    <Col className='d-flex justify-content-center client-img' xs={6} lg={2}>
                        <img src={require(`./img/asset 3.png`)} alt="" className='c-box' />
                    </Col>
                    <Col className='d-flex justify-content-center client-img' xs={6} lg={2}>
                        <img src={require(`./img/asset 4.png`)} alt="" className='c-box' />
                    </Col>
                    <Col className=' justify-content-center d-none d-lg-flex client-img' xs={6} lg={2}>
                        <img src={require(`./img/asset 5.png`)} alt="" className='c-box' />
                    </Col>
                </Row>
                <Row className='d-flex gap-0 justify-content-center'>
                    <Col className='d-flex justify-content-center client-img client-img' xs={6} lg={2}>
                        <img src={require(`./img/asset 6.png`)} alt="" className='c-box' />
                    </Col>
                    <Col className='d-flex justify-content-center client-img' xs={6} lg={2}>
                        <img src={require(`./img/asset 7.png`)} alt="" className='c-box' />
                    </Col>
                    <Col className='d-flex justify-content-center client-img' xs={6} lg={2}>
                        <img src={require(`./img/asset 8.png`)} alt="" className='c-box' />
                    </Col>
                    <Col className='d-flex justify-content-center client-img' xs={6} lg={2}>
                        <img src={require(`./img/asset 9.png`)} alt="" className='c-box' />
                    </Col>
                    <Col className=' justify-content-center d-none d-lg-flex client-img' xs={6} lg={2}>
                        <img src={require(`./img/asset 10.png`)} alt="" className='c-box' />
                    </Col>
                </Row>

            </Container>
        </div>
    );
}
export default ClientCom;