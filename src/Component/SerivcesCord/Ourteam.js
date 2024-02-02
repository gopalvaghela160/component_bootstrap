import { Container, Row, Col, Card } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Ourteam() {
    return (
        <div>
            <OwlCarousel className='owl-theme' loop margin={10} nav>
                <div class='item'>
                    {/* <h4>1</h4> */}
                    <div class="class-box">
                        <div class="services-kutu2 wow fadeInLeft" data-wow-delay="0.5s" >
                            <div class="member-box wow reveal-effect">
                                <figure class=""> <img src={require(`./img/team1.png`)} alt="Image"></img>
                                    <figcaption>
                                        <h6>Jack Smith</h6>
                                        <p class="paragraf-sol-beyaz-orta">Interior Architect</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <h4>2</h4>
                </div>
                <div class='item'>
                    <h4>3</h4>
                </div>
                <div class='item'>
                    <h4>4</h4>
                </div>
                <div class='item'>
                    <h4>5</h4>
                </div>
                <div class='item'>
                    <h4>6</h4>
                </div>
            </OwlCarousel>
        </div>
    );
}
export default Ourteam;