import React from 'react';
import './Favorites.scss';
import favorite from '../../resources/svg/favorite.svg';
import scoreCard from '../../resources/svg/score-card.svg';

import { Row, Col, Container, Card, CardBody, CardTitle, CardText } from 'reactstrap';


const Favorites = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={12} lg={12} xl={12}>
            <img className="img-cuadros" style={{ width:'width: 14%' }} src={favorite} alt="Favoritos" />
            <span className="our-experience">Favoritos</span> 
          </Col>
        </Row>

        <Row>
          
          <Col xl="3">
            <Card className="card-score">
              <Row className="justify-content-center">
                <img alt="categoria" className="img-category-card" src={scoreCard}/>
              </Row>
              <CardBody>
                <CardTitle className="title-score">
                  Título artículo
                </CardTitle>
                <CardText className="text-card-score">
                  Lorem ipsum dolor sit
                  amet, adipiscing elit, 
                  dolor sit
                </CardText>
                <button className="more" size="lg">Ver</button>
              </CardBody>
            </Card>
          </Col>
          <Col xl="3">
            <Card className="card-score">
              <Row className="justify-content-center">
                <img alt="categoria" className="img-category-card" src={scoreCard}/>
              </Row>
              <CardBody>
                <CardTitle className="title-score">
                  Título artículo
                </CardTitle>
                <CardText className="text-card-score">
                  Lorem ipsum dolor sit
                  amet, adipiscing elit, 
                  dolor sit
                </CardText>
                <button className="more" size="lg">Ver</button>
              </CardBody>
            </Card>
          </Col>
        
          <Col xl="3">
            <Card className="card-score">
              <Row className="justify-content-center">
                <img alt="categoria" className="img-category-card" src={scoreCard}/>
              </Row>
              <CardBody>
                <CardTitle className="title-score">
                  Título artículo
                </CardTitle>
                <CardText className="text-card-score">
                  Lorem ipsum dolor sit
                  amet, adipiscing elit, 
                  dolor sit
                </CardText>
                <button className="more" size="lg">Ver</button>
              </CardBody>
            </Card>
          </Col>
          <Col xl="3">
            <Card className="card-score">
              <Row className="justify-content-center">
                <img alt="categoria" className="img-category-card" src={scoreCard}/>
              </Row>
              <CardBody>
                <CardTitle className="title-score">
                  Título artículo
                </CardTitle>
                <CardText className="text-card-score">
                  Lorem ipsum dolor sit
                  amet, adipiscing elit, 
                  dolor sit
                </CardText>
                <button className="more" size="lg">Ver</button>
              </CardBody>
            </Card>
          </Col>

        </Row>

      </Container>
    </div>
  );
};

export default Favorites;