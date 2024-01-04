import React from 'react';
import './ServicesOther.scss';


import scoredynamics from '../../../resources/svg/vector4.svg';
import mercadeo from '../../../resources/svg/vector5.svg';
import buro from '../../../resources/svg/vector1.svg';
import analisis from '../../../resources/svg/vector1.svg';




import { Row, Col, Container, Card, CardBody, CardTitle, CardText } from 'reactstrap';


const ServicesOther = () => {
  return (
    <div>
      <Container className="screen-cart">
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={12} lg={12} xl={12}>
            <span className="our-experience">Otros servicios</span> 
          </Col>
        </Row>
        <Row>
          <Col xl="6">
            <Card className="card-services-cuadrado">
              <CardBody>
                <Row>
                  <Col xs="5" className="d-flex justify-content-center">
                    <img alt="buro" className="img-services-cuadrado" src={buro}/>
                  </Col>
                  <Col xs="7" className="content-text-info">
                    <CardTitle  className="title-services">Buro <br/>De crédito</CardTitle>
                    <CardText className="text-services">
                      Reportes de crédito personalizados,<br/>
                      servicios en batch con atributos a la<br/>
                      medida, Hosting modelos a la <br/>medida, Dashboards calidad de data,<br/>
                      modelos segmentación «en línea».
                    </CardText>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                  <Col xs="12" className="text-center">
                    <button className="more-cuadrado" size="sm">Conoce más</button>
                  </Col>
              </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
            <Card className="card-services-cuadrado">
              <CardBody>
                <Row>
                  <Col xs="5" className="d-flex justify-content-center">
                    <img alt="Analisís" className="img-services-cuadrado" src={analisis}/>
                  </Col>
                  <Col xs="7" className="content-text-info">
                    <CardTitle  className="title-services">Análisis<br/>Macro-crediticio</CardTitle>
                    <CardText className="text-services">
                      Modelos econométricos, Análisis<br/>
                      sectoriales, Análisis crediticia mercado,<br/>
                      Comportamiento consumidores, Tendencias<br/>
                      comparativas [productos / instituciones]<br/>
                      Análisis inclusión financiera.
                    </CardText>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                  <Col xs="12" className="text-center">
                    <button className="more-cuadrado" size="sm">Conoce más</button>
                  </Col>
              </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>



      <Container>
        <Row className="justify-content-center text-center row-card-one">
          
          <Col className="card-cont" xs={12} sm={6} md={6} lg={6} xl={6}>
            <Card className="card-diagnostico">
              <Row className="justify-content-center">
                <img alt="diagnostico" className="img-services" src={scoredynamics}/>
              </Row>
              <CardBody>
                <CardTitle className="title-services">
                  Score Dynamics
                </CardTitle>
                <CardText className="text-services">
                  Modelos de originación y behavior,<br/>
                  Modelos de desersión, Modelos pérdida<br/>
                  esperada, Atributos a la medida, Modelos<br/>
                  de rentabilidad, Modelos predictivos «no-bancarizados».
                </CardText>
                <button className="more" size="lg">Conoce más</button>
              </CardBody>
            </Card>
          </Col>
          <Col className="card-cont" xs={12} sm={6} md={6} lg={6} xl={4}>
            <Card className="card-diagnostico">
              <Row className="justify-content-center">
                <img alt="diagnostico" className="img-services" src={mercadeo}/>
              </Row>
              <CardBody>
                <CardTitle className="title-services">
                  Mercadeo analítico
                </CardTitle>
                <CardText className="text-services">
                  Consultoría especializada, Modelos de<br/>
                  respuesta, Mejoras en los costos de <br/>
                  adquisición, Diseño y ejecución de<br/>
                  campañas, Acompañamiento técnico.
                </CardText>
                <button className="more" size="lg">Conoce más</button>
              </CardBody>
            </Card>
          </Col>
          <Col className="card-cont view-cart" xs={12} sm={6} md={6} lg={6} xl={4}>
            <Card className="card-diagnostico">
              <Row className="justify-content-center">
                <img alt="diagnostico" className="img-services" src={buro}/>
              </Row>
              <CardBody>
                <CardTitle className="title-services">
                  Buro <br/>De crédito
                </CardTitle>
                <CardText className="text-services">
                  Reportes de crédito personalizados,<br/>
                  servicios en batch con atributos a la<br/>
                  medida, Hosting modelos a la <br/>medida, Dashboards calidad de data,<br/>
                  modelos segmentación «en línea».
                </CardText>
                <button className="more" size="lg">Conoce más</button>
              </CardBody>
            </Card>
          </Col>
          <Col className="card-cont view-cart" xs={12} sm={6} md={6} lg={6} xl={4}>
            <Card className="card-diagnostico">
              <Row className="justify-content-center">
                <img alt="diagnostico" className="img-services" src={analisis}/>
              </Row>
              <CardBody>
                <CardTitle className="title-services">
                  Análisis<br/>Macro-crediticio
                </CardTitle>
                <CardText className="text-services">
                    Modelos econométricos, Análisis<br/>
                    sectoriales, Análisis crediticia mercado,<br/>
                    Comportamiento consumidores, Tendencias<br/>
                    comparativas [productos / instituciones]<br/>
                    Análisis inclusión financiera.
                </CardText>
                <button className="more" size="lg">Conoce más</button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>


    </div>
  );
};

export default ServicesOther;