import{ Container, Row, Col ,Card ,Tab} from 'react-bootstrap';
import { FaLaptopHouse } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaStarOfDavid } from "react-icons/fa";
import { GiAstronautHelmet } from "react-icons/gi"; 
function Creative() {
    return(
        <div>
        <Container>

          <Row className='justify-content-center'>
            <Col className='justify-content-center d-flex' md lg={3}>
              <Card style={{ width: '18rem', textAlign: 'center', padding: '46px 20px 54px 20px', border: 'none' }}>
                <Card.Title className='mb-4'> Creative & Natural </Card.Title>
                <div className='card-icon m-auto'><i><FaLaptopHouse /></i></div>
                <Card.Body>
                  <Card.Text className='card-text'>
                    <p>
                      We are building a creative living space by working in pursuit of differences and quality.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='justify-content-center d-flex' md lg={3}>
              <Card style={{ width: '18rem', textAlign: 'center', padding: '46px 20px 54px 20px', border: 'none' }}>
                <Card.Title className='mb-4'>  Innovative & Quality</Card.Title>
                <div className='card-icon m-auto'><i><MdOutlineHealthAndSafety /></i></div>
                <Card.Body>
                  <Card.Text className='card-text'>
                    <p>
                      We serve our customers with our expert architects for all architectural consultancy needs.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='justify-content-center d-flex' md lg={3}>
              <Card style={{ width: '18rem', textAlign: 'center', padding: '46px 20px 54px 20px', border: 'none' }}>
                <Card.Title className='mb-4'> Fast & Reliable </Card.Title>
                <div className='card-icon m-auto'><i><GiAstronautHelmet /></i></div>
                <Card.Body>
                  <Card.Text className='card-text'>
                    <p>With our competent experience and expert architects, we deliver your projects as soon as .</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='justify-content-center d-flex' md lg={3}>
              <Card style={{ width: '18rem', textAlign: 'center', padding: '46px 20px 54px 20px', border: 'none' }}>
                <Card.Title className='mb-4'>  Professional Service  </Card.Title>
                <div className='card-icon m-auto'><i><FaStarOfDavid /></i></div>
                <Card.Body>
                  <Card.Text className='card-text'>
                    <p>
                      With our expert team, we put different designs into practice and reveal your difference in a . </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
    );
}
export default Creative;