import{ Container, Row, Col} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider() {
    return (
        <div>
            <OwlCarousel className='owl-theme slider1' loop margin={0} nav dots={false} items={1}>
                <div class='item sliderItems'>
                    <img src={require(`./img/asset 38.jpeg`)} alt="" />
                    <div className='sliderContant'>
                        <Container>
                            <h1>Projecting With<br></br>
                                <strong>Special Ideas</strong>
                            </h1>
                            <p> Special isolation solutions suitable for the area.</p>
                            <button >Learn More</button>
                        </Container>
                    </div>
                </div>
                <div class='item sliderItems'>
                    <img src={require(`./img/asset 39.jpeg`)} alt="" />
                    <div className='sliderContant'>
                        <Container>
                            <h1>Innovative<br></br>
                                <strong>Perspective</strong>
                            </h1>
                            <p> We add air to your interior.</p>
                            <button >Learn More</button>
                        </Container>
                    </div>
                </div>
                <div class='item sliderItems'>
                    <img src={require(`./img/asset 37.jpeg`)} alt="" />
                    <div className='sliderContant'>
                        <Container>
                            <h1>New Generation<br></br>
                                <strong>Modern Design</strong>
                            </h1>
                            <p>We prepare the place of your dreams.</p>
                            <button >Learn More</button>
                        </Container>
                    </div>
                </div>
                <div class='item sliderItems'>
                    <img src={require(`./img/asset 40.jpeg`)} alt="" />
                    <div className='sliderContant'>
                        <Container>
                            <h1>Special Generation <br></br>
                                <strong>Design Furniture</strong>
                            </h1>
                            <p>We create the interior with exclusive premium items.</p>
                            <button >Learn More</button>
                        </Container>
                    </div>
                </div>

            </OwlCarousel>;
        </div>
    );
}
export default Slider;