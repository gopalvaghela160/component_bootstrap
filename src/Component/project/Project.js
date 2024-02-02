import{ Container, Row, Col ,Card } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Project() {
    const wow = {
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
    return(
        <div>
        <Container>
          <Row className='project-white text-center'>
            <Col className='what-main'><h2>What Have We Done ?</h2></Col>
          </Row>
          <OwlCarousel className='owl-theme' loop margin={10} {...wow} >
            <div class='item ProjectDtl position-relative' >
              <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
              <img src={require(`./img/p1.png`)} width={'100%'} />
              <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
            </div>
            <div class='item ProjectDtl position-relative' >
              <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
              <img src={require(`./img/p2.png`)} width={'100%'} />
              <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
            </div>
            <div class='item ProjectDtl position-relative' >
              <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
              <img src={require(`./img/p3.png`)} width={'100%'} />
              <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
            </div>
            <div class='item ProjectDtl position-relative' >
              <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
              <img src={require(`./img/p4.png`)} width={'100%'} />
              <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
            </div>
            <div class='item ProjectDtl position-relative' >
              <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
              <img src={require(`./img/p5.png`)} width={'100%'} />
              <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
            </div>
            <div class='item ProjectDtl position-relative' lg={6}>
              <h5 className='position-absolute top-0 text-light p-3 fw-bolder DtlTxt'>Architectural Project</h5>
              <img src={require(`./img/p6.png`)} width={'100%'} />
              <button className='DtlBtn position-absolute bottom-0 start-0 pt-2 pb-2 px-5  text-bg-dark border-0 mb-5 ms-3'>view</button>
            </div>
          </OwlCarousel>;
        </Container>
      </div>
    );
}
export default Project;