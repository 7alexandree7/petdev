
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import ServicesContent from "./components/services/ServicesContent";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ServicesContent />
      <Testimonials />
      <Footer />
    </main>
  );
}
