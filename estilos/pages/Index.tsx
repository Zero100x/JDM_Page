import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import FeaturedCars from "@/components/FeaturedCars";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSlider />
      <Categories />
      <FeaturedCars />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
