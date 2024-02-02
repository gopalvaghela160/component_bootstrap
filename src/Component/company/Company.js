import{ Container, Row, Col  } from 'react-bootstrap';

function Company() {
    return(
        <div className='company'>
        <Container>
          <Row className='text-white text-center'>
            <Col className='com-tital'><h2>Those Who Prefer Us ?</h2></Col>
          </Row>
          <Row className='d-flex gap-0 justify-content-center align-itmes-center'>
            <Col className='d-flex justify-content-center mt-1 ' xs={12} lg={2} sm={6}>
              <img src={require(`./img/c1.png`)} alt="" className='c-box' />
            </Col>
            <Col className='d-flex justify-content-center mt-1 ' xs={12} lg={2} sm={6}>
              <img src={require(`./img/c2.png`)} alt="" className='c-box' />
            </Col>
            <Col className='d-flex justify-content-center mt-1 ' xs={12} lg={2} sm={6}>
              <img src={require(`./img/c3.png`)} alt="" className='c-box' />
            </Col>
            <Col className='d-flex justify-content-center mt-1 ' xs={12} lg={2} sm={6}>
              <img src={require(`./img/c4.png`)} alt="" className='c-box' />
            </Col>
            <Col className=' justify-content-center mt-1 d-none d-lg-flex ' xs={12} lg={2} sm={6}>
              <img src={require(`./img/c5.png`)} alt="" className='c-box' />
            </Col>
          </Row>
          <Row className='d-flex gap-0 justify-content-center align-itmes-center'>
            <Col className='d-flex justify-content-center mt-1 ' xs={12} lg={2} sm={6}>
              <img src={require(`./img/c1.png`)} alt="" className='c-box' />
            </Col>
            <Col className='d-flex justify-content-center mt-1 ' xs={12} lg={2} sm={6}>
              <img src={require(`./img/c2.png`)} alt="" className='c-box' />
            </Col>
            <Col className='d-flex justify-content-center mt-1 ' xs={12} lg={2} sm={6}>
              <img src={require(`./img/c3.png`)} alt="" className='c-box' />
            </Col>
            <Col className='d-flex justify-content-center mt-1 ' xs={12} lg={2} sm={6}>
              <img src={require(`./img/c4.png`)} alt="" className='c-box' />
            </Col>
            <Col className=' justify-content-center mt-1 d-none d-lg-flex ' xs={12} lg={2} sm={6}>
              <img src={require(`./img/c5.png`)} alt="" className='c-box' />
            </Col>
          </Row>
      
        </Container>
      </div>
    );
}
export default Company;