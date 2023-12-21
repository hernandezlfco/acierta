//import React, { useState } from 'react';
import React from 'react';


import agenda from '../../resources/svg/agenda.svg';
//import logo from '../../resources/img/logo.png';
//import logo from '../../resources/img/test.png';
import escribenos from '../../resources/svg/escribenos.svg';
//import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';
import { Row, Col, Container, Form, FormGroup, Label, Input } from 'reactstrap';

import './Articles.scss';



/*const items = [
  {
    src: logo,
    altText: 'Slide 1',
    caption: 'Slide 1 Caption',
  },
  {
    src: logo,
    altText: 'Slide 2',
    caption: 'Slide 2 Caption',
  },
  {
    src: logo,
    altText: 'Slide 3',
    caption: 'Slide 3 Caption',
  },
  {
    src: logo,
    altText: 'Slide 4',
    caption: 'Slide 4 Caption',
  },
];*/


const OurServices = () => {

  /*
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });*/


  return (
    
    <Container>
      <Container>
        <Row>
          <Col xl="8">
            <Row>
              <Col xs={12} sm={6} md={12} lg={12} xl={12}>
                <img className="img-cuadros" style={{ width:'width: 14%' }} src={agenda} alt="Servicios" />
                <span className="our-experience">Nuevos Artículos</span> 
              </Col>
            </Row>
            <Row>
              {/*<Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} className="custom-indicators" onClickHandler={goToIndex} />
                {slides}
              </Carousel>*/}
            </Row>

            
            <Row>
              <Col className="col-text-slider" xl="8">
                <span className="title-text-slider">lorem ipsum dolor sit</span>
                <p className="text-slider">
                  Reportes de crédito personalizados, Servicios en batch<br/>con atributos a la medida, Hosting modelos a la medida.
                </p>
              </Col>
              <Col className="col-text-slider-btn" xl="3">
                <button className="ver-btn" size="lg">Ver</button>
              </Col>
            </Row>


          </Col>
          <Col xl="4">
            <Row>
              <Col xs={12} sm={6} md={12} lg={12} xl={12}>
                <img className="img-cuadros" style={{ width:'width: 14%' }} src={escribenos} alt="Servicios" />
                <span className="our-experience">Escríbenos</span> 
              </Col>
            </Row>

            <Form>
              <Row>
                <FormGroup>
                  <Label className="text-input" for="nombre">
                    Nombre
                  </Label>
                  <Input
                    id="nombre"
                    className="input-escribenos"
                    name="nombre"
                    placeholder=""
                    type="nombre"
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Label className="text-input" for="correo">
                    Correo
                  </Label>
                  <Input
                    id="correo"
                    className="input-escribenos"
                    name="correo"
                    placeholder=""
                    type="email"
                  />
                </FormGroup>
              </Row>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label className="text-input" for="codigo">
                      Código de área
                    </Label>
                    <Input
                      id="codigo"
                      className="input-escribenos"
                      name="codigo"
                      placeholder=""
                      type="codigo"
                    />
                  </FormGroup>
                </Col>
                <Col md={8}>
                  <FormGroup>
                    <Label className="text-input" for="telefono">
                      Teléfono
                    </Label>
                    <Input
                      id="telefono"
                      className="input-escribenos"
                      name="telefono"
                      placeholder=""
                      type="telefono"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <FormGroup>
                  <Label className="text-input" for="solicitud">
                    Solicitud
                  </Label>
                  <Input
                    id="solicitud"
                    className="input-escribenos"
                    name="solicitud"
                    placeholder=""
                    type="textarea"
                  />
                </FormGroup>
              </Row>
              <Row>
                <div className="ml-auto enviar-btn">
                  <button className="ver-btn-enviar" size="lg">Enviar</button>
                </div>
              </Row>
            </Form>
            



          </Col>
        </Row>
      </Container>
      
    </Container>
  );
};

export default OurServices;