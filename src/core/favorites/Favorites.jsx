import React, { useEffect, useState } from 'react';
import './Favorites.scss';
import favorite from '../../resources/svg/favorite.svg';
import scoreCard from '../../resources/svg/score-card.svg';
import { Row, Col, Container, Card, CardBody, CardTitle, CardText } from 'reactstrap';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Favorites = () => {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1.1,
    slidesToScroll: 1,
  };

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderContent = () => {
    if (isMobile) {
      return (
        <Slider {...settings}>
          {[1, 2, 3, 4].map(index => (
            <Col className="cards-padding-score" key={index} xs={12} sm={12} md={6} lg={6} xl={3}>
              <Card className="card-score">
                <Row className="justify-content-center">
                  <img alt={`categoria ${index}`} className="img-category-card" src={scoreCard} />
                </Row>
                <CardBody className="card-body">
                  <CardTitle className="title-score">
                    Título artículo
                  </CardTitle>
                  <CardText className="text-card-score">
                    Lorem ipsum dolor sit amet, adipiscing elit, dolor sit
                  </CardText>
                  <button className="more" size="lg">Ver</button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Slider>
      );
    } else {
      return (
        <Row>
          {[1, 2, 3, 4].map(index => (
            <Col className="cards-padding-score" key={index} xs={12} sm={12} md={6} lg={6} xl={3}>
              <Card className="card-score">
                <Row className="justify-content-center">
                  <img alt={`categoria ${index}`} className="img-category-card" src={scoreCard} />
                </Row>
                <CardBody className="card-body">
                  <CardTitle className="title-score">
                    Título artículo
                  </CardTitle>
                  <CardText className="text-card-score">
                    Lorem ipsum dolor sit amet, adipiscing elit, dolor sit
                  </CardText>
                  <button className="more" size="lg">Ver</button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      );
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={12} lg={12} xl={12}>
          <img className="img-cuadros" src={favorite} alt="Servicios" />
          <span className="our-experience">Favoritos</span> 
        </Col>
      </Row>

      {renderContent()}
    </Container>
  );
};

export default Favorites;