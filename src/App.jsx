import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import './App.css'
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='bg-black'>
      <Hero />
      <About/>
      <Projects/>
      <Footer/>
    </div >
  );
}
