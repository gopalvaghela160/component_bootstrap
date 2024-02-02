import { Container, Row, Col } from 'react-bootstrap';
// react icons
import { FaRegEnvelope } from "react-icons/fa";
import { TfiMapAlt } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";

function Footer() {
  return (
    <footer style={{ marginTop: "50px" }}>
      <Container>
        <Row className='m-auto'>
          <Col className='columnss me-5' lg={2}>
            <div className="teroDtl text-left">
              <div className="teroImg mb-4">
                <img src={require(`./img/asset 32.png`)} />
              </div>
              <div className="teroLink">
                <div>
                  <span><i className='fs-3 me-2'><LuPhoneCall></LuPhoneCall></i> +91 9737834842</span>
                </div>
                <div>
                  <span><i className='fs-3 me-2'><FaRegEnvelope></FaRegEnvelope></i>test@gmail.com</span>
                </div>
                <div>
                  <span><i className='fs-3 me-2'><TfiMapAlt></TfiMapAlt></i>New jersy,USA</span>
                </div>
              </div>
            </div>
          </Col>
          <Col className='columnss me-3' lg={5}>
            <div>
              <h3>Tero - Interior Design </h3>
              <p>We are in time and we catch what the age brings by listening to the sound of time. With our work through time, we produce long-term projects and realize the dreamed spaces.</p>
              <button className='mt-3'> CONTECT US</button>
            </div>
          </Col>
          <Col className='columnss' lg={2}>
            <h3>Services</h3>
            <ul className='columnList'>
              <li><a >Architectural Consulting</a></li>
              <li><a >Interior Architecture</a></li>
              <li><a >Architectural Project</a></li>
              <li><a >Renovation Decoration</a></li>
              <li><a>Furniture Design</a></li>
            </ul>
          </Col>
          <Col className='columnss' lg={2}>
            <h3>Quick Links</h3>
            <ul className='columnList'>
              <li><a >Architectural Consulting</a></li>
              <li><a >Interior Architecture</a></li>
              <li><a >Architectural Project</a></li>
              <li><a >Renovation Decoration</a></li>
              <li><a>Furniture Design</a></li>
            </ul>
          </Col>
          <Col className='mt-5'>
            <p class="copyright">© 2023 Tero - All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );

}
export default Footer;