import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';




function App() {
  return (
    <div className="scroll-smooth bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    
   
    </div>
  );
}

export default App;
