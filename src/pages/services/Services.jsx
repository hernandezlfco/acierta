import React from 'react';
import Navbar from '../../core/header/navbar/NavbarComponent'

import ServicesOther from './servicesOther/ServicesOther'
import ServicesTestimonials from './servicesTestimonials/ServicesTestimonials'


import Footer from '../../core/footer/Footer'
import { Container } from 'reactstrap';

const Services = () => {
  return (
    <Container>
      <Navbar />
      <ServicesTestimonials/>
      <ServicesOther/>
      <Footer />
    </Container>
  );
};

export default Services;