import React from 'react';
import './Footer.scss';

import email from '../../resources/svg/email.svg';
import phone from '../../resources/svg/phone.svg';
import location from '../../resources/svg/location.svg';

import instagram from '../../resources/svg/instagram.svg';
import linke from '../../resources/svg/linke.svg';
import xce from '../../resources/svg/xce.svg';





import { Row, Col, Container } from 'reactstrap';


const Footer = () => {
  return (
    <Container>
      <Row className="justify-content-center row-social">
        <Col xs="auto">
          <img src={instagram} alt="Imagen 1" />
        </Col>
        <Col xs="auto" className="img-redes">
          <img src={linke} alt="Imagen 2" />
        </Col>
        <Col xs="auto">
          <img src={xce} alt="Imagen 3" />
        </Col>
      </Row>
      <Row>
        <Col xl="4">
          <Row><a href="https://www.example.com" className="footer-services-title">Servicios</a> </Row>
          <Row><a href="https://www.example.com" className="footer-services">Diagnóstico analítico</a> </Row>
          <Row><a href="https://www.example.com" className="footer-services">Score dynamics</a> </Row>
          <Row><a href="https://www.example.com" className="footer-services">Mercadeo analítico</a> </Row>
          <Row><a href="https://www.example.com" className="footer-services">Buro de crédito</a> </Row>
          <Row><a href="https://www.example.com" className="footer-services">Análisis Macro</a> </Row>
        </Col>
        <Col xl="4">
          <Row><a href="https://www.example.com" className="footer-services-title">Publicaciones</a></Row>
          <Row><a href="https://www.example.com" className="footer-services-title space">Escríbenos</a></Row>
        </Col>
        <Col xl="4">
          <Row>
            <a href="https://www.example.com" className="footer-services-title">Contáctenos</a>
          </Row>
          <Row className="footer-contact-row">
            <Col xl="1">
              <img alt="categoria" src={email}/>
            </Col>
            <Col xl="10">
              <span className="footer-contact">info@acierta.com.do</span>
            </Col>
          </Row> 

          <Row className="footer-contact-row">
            <Col xl="1">
              <img alt="categoria" src={phone}/>
            </Col>
            <Col xl="10">
              <span className="footer-contact">809-688-1122</span>
            </Col>
          </Row>  

          <Row className="footer-contact-row">
            <Col xl="1">
              <img alt="categoria" src={location}/>
            </Col>
            <Col xl="10">
              <span className="footer-contact">Max Henriquez Ureña 459, Evaristo
                Morales, Santo Domingo<br/>
                Suite 202, Edificio In Tempo
              </span>
            </Col>
          </Row>  

        </Col>
      </Row>
    </Container>
  );
};

export default Footer;