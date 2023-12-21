import React from 'react';
import './Publications.scss';
import publications from '../../resources/svg/publications.svg';
import category from '../../resources/svg/category.svg';

import categoryImg from '../../resources/svg/category-img.svg';




import { Row, Col, Container, Card, CardBody, CardTitle, CardText } from 'reactstrap';


const Publications = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={12} lg={12} xl={12}>
            <img className="img-cuadros" style={{ width:'width: 14%' }} src={publications} alt="Servicios" />
            <span className="our-experience">Publicaciones</span> 
          </Col>
        </Row>

        <Row className='content-category'>
          <Col xl="8">
            <img className="img-category" src={category} alt="Servicios" />
          </Col>
          <Col xl="4">
            <Row>
              <Col xl="6">
                <Card className="card-category">
                  <Row className="justify-content-center">
                    <img alt="categoria" className="img-category-card" src={categoryImg}/>
                  </Row>
                  <CardBody>
                    <CardTitle className="title-category">
                      Título artículo
                    </CardTitle>
                    <CardText className="text-services">
                      Lorem ipsum dolor sit
                      amet, adipiscing elit,
                    </CardText>
                    <button className="more" size="lg">Ver</button>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="6">
                <Card className="card-category">
                  <Row className="justify-content-center">
                    <img alt="categoria" className="img-category-card" src={categoryImg}/>
                  </Row>
                  <CardBody>
                    <CardTitle className="title-category">
                      Título artículo
                    </CardTitle>
                    <CardText className="text-services">
                      Lorem ipsum dolor sit
                      amet, adipiscing elit,
                    </CardText>
                    <button className="more" size="lg">Ver</button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="row-category">
              <Col xl="6">
                <Card className="card-category">
                  <Row className="justify-content-center">
                    <img alt="categoria" className="img-category-card" src={categoryImg}/>
                  </Row>
                  <CardBody>
                    <CardTitle className="title-category">
                      Título artículo
                    </CardTitle>
                    <CardText className="text-services">
                      Lorem ipsum dolor sit
                      amet, adipiscing elit,
                    </CardText>
                    <button className="more" size="lg">Ver</button>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="6">
                <Card className="card-category">
                  <Row className="justify-content-center">
                    <img alt="categoria" className="img-category-card" src={categoryImg}/>
                  </Row>
                  <CardBody>
                    <CardTitle className="title-category">
                      Título artículo
                    </CardTitle>
                    <CardText className="text-services">
                      Lorem ipsum dolor sit
                      amet, adipiscing elit,
                    </CardText>
                    <button className="more" size="lg">Ver</button>
                  </CardBody>
                </Card>
              </Col>
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