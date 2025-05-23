
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";




 
export default function HomePage() {
  
  return (
    <div className=" text-white">
     
      <Navbar />
      <Header />
        {/* Services */}
        <section id="services">
                <Services />
            </section>

            {/* Technologies */}
            <section id="technologies">
                <Skills />
            </section>

            {/* Portfolio */}
            <section id="portfolio">
                <Portfolio />
            </section>

            {/* Contact */}
            <section id="contact">
                <Contact />
            </section>
            <Footer />
    </div>
  );
}
