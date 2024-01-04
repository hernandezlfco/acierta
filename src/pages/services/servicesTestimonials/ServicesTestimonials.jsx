import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import './ServicesTestimonials.scss';
//import testimonialsHeader from '../../../resources/svg/testimonialsHeader.svg';

const ServicesTestimonials = () => {
  return (
    <Container>
      <Row className="testimonial-container">
        <Col xs={12} md={6} className="testimonial-image">
          {/*<img src={testimonialsHeader} alt="Diagnóstico Analítico" />*/}
        </Col>
        <Col xs={12} md={6} className="testimonial-content">
          <Card className="testimonial-card">
            <CardBody>
              <h2 className="testimonial-title">Diagnóstico Analítico</h2>
              <p className="testimonial-text">
                Nuestros servicios de analítica avanzada potencializan a que
                nuestros socios logren una diferenciación competitiva mediante
                una estrategia de negocios "impulsada por la data".
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesTestimonials;