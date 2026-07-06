import MainLayout from "../layouts/MainLayout";

import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Services />
      <Testimonials />
    </MainLayout>
  );
};

export default Home;