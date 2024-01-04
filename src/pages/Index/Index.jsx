

import { Container } from 'reactstrap';
import Navbar from '../../core/header/navbar/NavbarComponent'
import Slider from '../../core/sliders/Slider'
import Experience from '../../core/experience/Experience'
import OurServices from '../../core/ourServices/OurServices'
import Articles from '../../core/articles/Articles'
import Publications from '../../core/publications/Publications'
import Score from '../../core/score/Score'
import Favorites from '../../core/favorites/Favorites'
import Footer from '../../core/footer/Footer'


const Index = () => {
  return (
    <Container>
      <Navbar />
      <Slider />
      <Experience />
      <OurServices />
      <Articles />
      <Publications />
      <Score />
      <Favorites />
      <Footer />
    </Container>
  );
};

export default Index;
