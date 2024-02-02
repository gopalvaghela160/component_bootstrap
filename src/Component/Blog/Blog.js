import{ Container, Row, Col ,Card ,Button } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Blog() {
    const option = {
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          }
        }
      }
    return (
        <div className='b-img'>
            <Container>
                <Row className='text-center mt-5 mb-5'>
                    <Col ><h2 className='fs-1 fw-bold'>Resent Blog Post</h2></Col>
                </Row>
                <OwlCarousel className='owl-theme' loop margin={10} {...option}>
                    <div class='item'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require(`./img/b3.png`)} />
                            <Card.Body className='text-center b-button'>
                                <Card.Title className='fw-bold'>Villa Design</Card.Title>
                                <Card.Text>
                                    <small>                    It is important for villa owners to contribute to this journey in order to achieve an interior ...
                                    </small>
                                </Card.Text>
                                <Button variant="dark" >More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class='item'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require(`./img/b2.png`)} />
                            <Card.Body className='text-center b-button'>
                                <Card.Title className='fw-bold'>Villa Design</Card.Title>
                                <Card.Text>
                                    <small>                    It is important for villa owners to contribute to this journey in order to achieve an interior ...
                                    </small>
                                </Card.Text>
                                <Button variant="dark" >More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class='item'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require(`./img/b1.png`)} />
                            <Card.Body className='text-center b-button'>
                                <Card.Title className='fw-bold'>Villa Design</Card.Title>
                                <Card.Text>
                                    <small>                    It is important for villa owners to contribute to this journey in order to achieve an interior ...
                                    </small>
                                </Card.Text>
                                <Button variant="dark" >More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class='item'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require(`./img/b4.png`)} />
                            <Card.Body className='text-center b-button'>
                                <Card.Title className='fw-bold'>Villa Design</Card.Title>
                                <Card.Text>
                                    <small>                    It is important for villa owners to contribute to this journey in order to achieve an interior ...
                                    </small>
                                </Card.Text>
                                <Button variant="dark" >More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </OwlCarousel>
            </Container>
        </div>
    );
}
export default Blog;