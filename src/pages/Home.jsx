import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import ContactSection from "../components/ContactSection/ContactSection";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Gallery />
      <ContactSection />
    </MainLayout>
  );
};

export default Home;