import './App.css';
import Footer from './components/Hero/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Hero/Join/Join';
import Plan from './components/Hero/Plans/Plan';
import Programs from './components/Hero/Programs/Programs';
import Reasons from './components/Hero/Reasons/Reasons';
import Testimonial from './components/Hero/Testimonials/Testimonial';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs/>
      <Reasons/>
      <Plan/>
      <Testimonial/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
