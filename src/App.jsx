import ButtonGradient from "./Assets/assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";

import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import RoadMap from "./components/RoadMap";
import Services from "./components/Services";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.35rem] overflow-hidden ">
        {/* <Button className="mt=10" href="#login">
      Something
    </Button> */}
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing/>
        <RoadMap/>
        <Footer/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
