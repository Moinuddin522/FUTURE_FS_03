import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
    </MainLayout>
  );
};

export default Home;