import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionWrapper from "./components/SectionWrapper";
import BackToTop from "./components/BackToTop";
import Services from "./components/Services";

export default function Home() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <NavBar />
      <BackToTop />
      
      {/* Hero section */}
      <section id="hero" style={{ paddingTop: '80px' }}>
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
      </section>
      
      {/* About section */}
      <section id="about" style={{ minHeight: '100vh', width: '100%', paddingTop: '80px' }}>
          <About />
      </section>
      
      {/* Projects section */}
      <section id="projects" style={{ minHeight: '100vh', width: '100%', paddingTop: '80px' }}>
          <Projects />
      </section>
      
      {/* Services section - Animated stacked cards */}
      <section id="services" style={{ minHeight: '100vh', width: '100%', paddingTop: '80px' }}>
          <Services />
      </section>
      
      {/* Gallery section 
      <section id="gallery" style={{ minHeight: '100vh', width: '100%', paddingTop: '80px' }}>
          <Gallery />
      </section>
      */}
      {/* Blog section removed */}
      
      {/* Contact section */}
      <section id="contact" style={{ minHeight: '100vh', width: '100%', paddingTop: '80px' }}>
          <Contact />
      </section>
      
      <Footer />
    </main>
  );
}
