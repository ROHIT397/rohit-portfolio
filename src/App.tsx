import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Experience } from './components/Experience';
import { TechnicalCapabilities } from './components/TechnicalCapabilities';
import { OtherProjects } from './components/OtherProjects';
import { Education } from './components/Education';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Experience />
      <TechnicalCapabilities />
      <OtherProjects />
      <Education />
      <About />
      <Footer />
    </div>
  );
}

export default App;
