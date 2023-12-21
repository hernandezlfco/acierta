import React from 'react';
import './OurServices.scss';
import diagnostico from '../../resources/img/Diagnostico.png';
import scoredynamics from '../../resources/img/Scoredynamics.png';
import mercadeo from '../../resources/img/Mercadeo.png';
import buro from '../../resources/img/buro.png';
import analisis from '../../resources/img/analisis.png';
import ourServices from '../../resources/svg/ourServices.svg';



import { Row, Col, Container, Card, CardBody, CardTitle, CardText } from 'reactstrap';


const OurServices = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={12} lg={12} xl={12}>
            <img className="img-cuadros" style={{ width:'width: 14%' }} src={ourServices} alt="Servicios" />
            <span className="our-experience">Nuestros servicios</span> 
          </Col>
        </Row>
        <Row className="justify-content-center text-center row-card-one">
          <Col xs={12} sm={6} md={12} lg={12} xl={4}>
            <Card className="card-diagnostico">
              <Row className="justify-content-center">
                <img alt="diagnostico" className="img-services" src={diagnostico}/>
              </Row>
              <CardBody>
                <CardTitle className="title-services">
                  Diagnóstico analitico
                </CardTitle>
                <CardText className="text-services">
                  Identificación brechas, Capacitación mejores prácticas, Validación y calibración modelos, 
                  Segmentación tiempo real, Consultoría analítica especializada, Gestión integral de riesgos, 
                  Acompañamiento técnico.
                </CardText>
                <button className="more" size="lg">Conoce más</button>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={12} lg={12} xl={4}>
            <Card className="card-diagnostico">
              <Row className="justify-content-center">
                <img alt="diagnostico" className="img-services" src={scoredynamics}/>
              </Row>
              <CardBody>
                <CardTitle className="title-services">
                  Score Dynamics
                </CardTitle>
                <CardText className="text-services">
                  Modelos de originación y behavior, 
                  Modelos de desersión, Modelos pérdida
                  esperada, Atributos a la medida, Modelos
                  de rentabilidad, Modelos predictivos «no-bancarizados».
                </CardText>
                <button className="more" size="lg">Conoce más</button>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={12} lg={12} xl={4}>
            <Card className="card-diagnostico">
              <Row className="justify-content-center">
                <img alt="diagnostico" className="img-services" src={mercadeo}/>
              </Row>
              <CardBody>
                <CardTitle className="title-services">
                  Mercadeo analítico
                </CardTitle>
                <CardText className="text-services">
                  Consultoría especializada, Modelos de
                  respuesta, Mejoras en los costos de 
                  adquisición, Diseño y ejecución de
                  campañas, Acompañamiento técnico.
                </CardText>
                <button className="more" size="lg">Conoce más</button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>


      <Container>
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
    </div>
  );
};

export default OurServices;