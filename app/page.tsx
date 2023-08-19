import Architectural from "@/components/Architectural";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import ITservice from "@/components/ITservice";
import Statistics from "@/components/Statistics";

const Home = () => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <Hero />
      <Statistics />
      <Banner />
      <Architectural />
      <ITservice />
    </div>
  );
};

export default Home;
