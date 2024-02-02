import{ Container, Row, Col ,Card } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Testimonial() {
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
        <div>
            <Container>
                <Row className='text-center mt-5 mb-5'>
                    <Col ><h2 className='fs-1 fw-bold'>What Did They Say ?</h2></Col>
                </Row>
                <OwlCarousel className='owl-theme' loop margin={10} {...option}>
                    <div class='item m-auto text-center'>
                        <div className='text-center'>
                            <p>
                                Since our bathroom is very old, we wanted to renovate it and they built an amazing space. Thank you very much for your services.
                            </p>
                        </div>
                        <div className='j-img m-auto'>
                            <img src={require(`./img/j1.png`)} alt="" />
                        </div>
                        <h5>Jane Doe</h5>
                    </div>
                    <div class='item m-auto text-center'>
                        <div className='text-center'>
                            <p>
                                They applied new furniture and design for the nursery. We were very satisfied. Thanks.
                                We were very satisfied. Thanks.We were very satisfied. Thanks.
                            </p>
                        </div>
                        <div className='j-img m-auto'>
                            <img src={require(`./img/j2.png`)} alt="" />
                        </div>
                        <h5>Jane Doe</h5>
                    </div>
                    <div class='item m-auto text-center'>
                        <div className='text-center'>
                            <p>
                                A friendly and professional team. They completed the project we wanted for our house very quickly and professionally. Thanks.
                            </p>
                        </div>
                        <div className='j-img m-auto'>
                            <img src={require(`./img/j3.png`)} alt="" />
                        </div>
                        <h5>Jane Doe</h5>
                    </div>
                    <div class='item m-auto text-center'>
                        <div className='text-center'>
                            <p>
                                We needed a new concept layout for our living room. They applied a design just as we imagined. Thanks.We were very satisfied. Thanks.We were very satisfied. Thanks.
                            </p>
                        </div>
                        <div className='j-img m-auto'>
                            <img src={require(`./img/j4.png`)} alt="" />
                        </div>
                        <h5>Jane Doe</h5>
                    </div>
                </OwlCarousel>
            </Container>
        </div>
    );
}
export default Testimonial;