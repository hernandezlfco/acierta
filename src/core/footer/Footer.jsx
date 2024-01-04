import React from 'react';
import './Footer.scss';
import { Row, Col, Container } from 'reactstrap';
import FooterLink from './FooterLink'; // Importar FooterLink para mejor organización
import FooterLinkContact from './FooterLinkContact'; // Importar FooterLinkContact para mejor organización

import footerLogo from '../../resources/svg/acierta_logo_footer.svg';
import instagram from '../../resources/svg/instagram.svg';
import linke from '../../resources/svg/linke.svg';
import xce from '../../resources/svg/xce.svg';
import email from '../../resources/svg/email.svg';
import phone from '../../resources/svg/phone.svg';
import location from '../../resources/svg/location.svg';

const Footer = () => {
  return (
    <Container>
      <Row className="justify-content-center row-social">
        <Col xs="auto">
          <img src={footerLogo} alt="Acierta Logo" className="img-fluid" />
        </Col>
      </Row>
      <Row className="justify-content-center row-social">
        <Col xs="auto">
          <img src={instagram} alt="Instagram" />
        </Col>
        <Col xs="auto" className="img-redes">
          <img src={linke} alt="LinkedIn" />
        </Col>
        <Col xs="auto">
          <img src={xce} alt="XCE" />
        </Col>
      </Row>
      <Row>
        <Col xl="4">
          <FooterLink title="Servicios" links={['Diagnóstico analítico', 'Score dynamics', 'Mercadeo analítico', 'Buro de crédito', 'Análisis Macro']} />
        </Col>
        <Col xl="4">
          <FooterLink title="Publicaciones" links={['Escríbenos']} />
        </Col>
        <Col xl="4">
          <FooterLinkContact title="Contáctenos" contactInfo={[
            { icon: email, info: 'info@acierta.com.do' },
            { icon: phone, info: '809-688-1122' },
            { icon: location, info: 'Max Henriquez Ureña 459, Evaristo Morales, Santo Domingo\nSuite 202, Edificio In Tempo' },
          ]} />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;