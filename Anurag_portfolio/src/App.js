
import { useContext } from 'react';
import './App.css'
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from "./Components/Navbar/Navbar";
import Protfolio from './Components/Protfolio/Protfolio';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';
import Works from './Components/Works/Works';
import { themeContext } from './Context';




function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{
      background : darkMode ? '#212121' : '',
      color: darkMode ? 'white' : ''
    }}>

      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Protfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
   
  
  
   
    </div>
  );
}

export default App;
