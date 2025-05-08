import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionWrapper from "./components/SectionWrapper";
import BackToTop from "./components/BackToTop";

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
        <SectionWrapper>
          <About />
        </SectionWrapper>
      </section>
      
      {/* Projects section */}
      <section id="projects" style={{ minHeight: '100vh', width: '100%', paddingTop: '80px' }}>
        <SectionWrapper>
          <Projects />
        </SectionWrapper>
      </section>
      
      {/* Services section - Added to match navbar */}
      <section id="services" style={{ minHeight: '100vh', width: '100%', paddingTop: '80px' }}>
        <SectionWrapper>
          <div className="glass" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-primary)' }}>Services</h2>
            <p style={{ marginTop: '1rem', color: 'var(--color-text)' }}>
              Services content will go here.
            </p>
          </div>
        </SectionWrapper>
      </section>
      
      {/* Gallery section */}
      <section id="gallery" style={{ minHeight: '100vh', width: '100%', paddingTop: '80px' }}>
        <SectionWrapper>
          <Gallery />
        </SectionWrapper>
      </section>
      
      {/* Blog section - Added to match navbar */}
      <section id="blog" style={{ minHeight: '100vh', width: '100%', paddingTop: '80px' }}>
        <SectionWrapper>
          <div className="glass" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-primary)' }}>Blog</h2>
            <p style={{ marginTop: '1rem', color: 'var(--color-text)' }}>
              Blog posts will appear here.
            </p>
          </div>
        </SectionWrapper>
      </section>
      
      {/* Contact section */}
      <section id="contact" style={{ minHeight: '100vh', width: '100%', paddingTop: '80px' }}>
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </section>
      
      <Footer />
    </main>
  );
}
