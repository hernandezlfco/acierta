import React from 'react';
import './Experience.scss';
import at from '../../resources/svg/at.svg';
import hsbc from '../../resources/svg/hsbc.svg';
import banorte from '../../resources/svg/banorte.svg';
import nissan from '../../resources/svg/nissan.svg';
import movistar from '../../resources/svg/movistar.svg';
import cuadros from '../../resources/svg/cuadros.svg';
import { Row, Col, Container } from 'reactstrap';



const Experience = () => {
  return (
    <div className="content-experience">
      
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={12} lg={12} xl={12}>
            <img className="img-cuadros" src={cuadros} alt="CUADROS" />
            <span className="our-experience">Nuestra Experiencia</span> 
          </Col>
        </Row>
        <Row className="justify-content-center row-2"> 
          <Col className="justify-content-center align-items-center centrar-imagen" xs={4} sm={4} md={4} lg={3} xl={2}>
            <img src={at} alt="AT&T" className="img-fluid" />
          </Col>
          <Col className="justify-content-center align-items-center centrar-imagen" xs={4} sm={4} md={4} lg={3} xl={2}>
            <img src={hsbc} alt="HSBC" className="img-fluid" />
          </Col>
          <Col className="justify-content-center align-items-center centrar-imagen" xs={4} sm={4} md={4} lg={3} xl={2}>
            <img src={banorte} alt="BANORTE" className="img-fluid" />
          </Col>
          <Col className="justify-content-center align-items-center centrar-imagen" xs={4} sm={4} md={4} lg={3} xl={2}>
            <img src={nissan} alt="NISSAN" className="img-fluid" />
          </Col>
          <Col className="justify-content-center align-items-center centrar-imagen" xs={4} sm={4} md={4} lg={3} xl={2}>
            <img src={movistar} alt="MOVISTAR" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      
    </div>
  );
};

export default Experience;