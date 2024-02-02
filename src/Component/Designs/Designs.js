import{ Container, Row, Col  } from 'react-bootstrap';

function Designs() {
    return(
        <div className='mt-5 mb-5'>
        <Container >
          <Row className='text-center fs-1 text-black mb-4'>
            <Col><strong>Who Are We ?</strong></Col>
          </Row>
          <Row className='trend-main'>
            <Col className='trend-box' lg={6}>
              <img src={require(`./img/who.png`)} alt="" width={'100%'} />
            </Col>
            <Col lg={6}>
              <div className='trend-text'style={{width:"300px"}}>
              
                <h2>
                  New Generation <br />
                  <strong>Modern Designs</strong>
                </h2>
                <p>We are in time and we catch what the age brings by listening to the sound of time. With our work through time, we produce long-term projects and realize the dreamed spaces.</p>
                {/* <img src="" alt="" /> */}
    
                <h2>Trending <strong>Designs</strong></h2>
                <p>We are building long-term, new places in our project and application works that we started with the understanding of quality service. We use state-of-the-art products with state-of-the-art methods and mediate our customers to live in more comfortable, more comfortable and more stylish spaces.</p>
                <button className=''>Get to know us</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
export default Designs;