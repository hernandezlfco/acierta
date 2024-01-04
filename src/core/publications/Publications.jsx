import React from 'react';
import './Publications.scss';
import { Row, Col, Container, Card, CardBody, CardTitle, CardText } from 'reactstrap';

import publications from '../../resources/svg/publications.svg';
import category from '../../resources/img/category.png';
import scoreCard from '../../resources/svg/score-card.svg';

const Publications = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={12} lg={12} xl={12}>
            <img className="img-cuadros" src={publications} alt="Publicaciones" />
            <span className="our-experience">Publicaciones</span>
          </Col>
        </Row>

        <Row className='content-category'>
          <Col  xs={12} sm={12} md={12} lg={12} xl={8}>
            <img className="img-category" src={category} alt="Categoría" />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={4}>
            <Row>
              {[1, 2, 3, 4].map(index => (
                <Col className="cards-padding" key={index} xs={6} sm={6} md={3} lg={3} xl={6}>
                  <Card className="card-category">
                    <Row className="justify-content-center">
                      <img alt={`categoria ${index}`} className="img-category-card" src={scoreCard} />
                    </Row>
                    <CardBody>
                      <CardTitle className="title-category">
                        Título artículo
                      </CardTitle>
                      <CardText className="text-services">
                        Lorem ipsum dolor sit amet, adipiscing elit,
                      </CardText>
                      <button className="more" size="lg">Ver</button>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>

            <Container>
              <Row className="justify-content-center">
                <button className="more-category" size="lg">Ver más</button>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Publications;