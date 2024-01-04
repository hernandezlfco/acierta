
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index/Index'
import Services from './pages/services/Services'
import './App.scss';


const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services/>} />
        </Routes>
      </Router>
  );
};

export default App;
