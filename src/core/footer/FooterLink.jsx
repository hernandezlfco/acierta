import React from 'react';
import { Row } from 'reactstrap';

const FooterLink = ({ title, links }) => (
  <>
    <Row>
      <a href="https://www.example.com" className="footer-services-title">{title}</a>
    </Row>
    {links.map((link, index) => (
      <Row key={index}>
        <a href="https://www.example.com" className="footer-services">{link}</a>
      </Row>
    ))}
  </>
);

export default FooterLink;