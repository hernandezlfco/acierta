import React from 'react';
import { Row, Col } from 'reactstrap';

const FooterLinkContact = ({ title, contactInfo }) => (
  <>
    <Row>
      <a href="https://www.example.com" className="footer-services-title">{title}</a>
    </Row>
    {contactInfo.map((item, index) => (
      <Row className="footer-contact-row" key={index}>
        <Col xl="1">
          <img alt="categoria" src={item.icon} />
        </Col>
        <Col xl="10">
          <span className="footer-contact">{item.info}</span>
        </Col>
      </Row>
    ))}
  </>
);

export default FooterLinkContact;