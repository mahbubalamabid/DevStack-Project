import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechnologySection from "./components/TechnologySection";
import FooterSection from "./components/FooterSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    {/* Navbar */}
      <Navbar />
      <HeroSection />
      <TechnologySection />
      <FooterSection />
      <ToastContainer />
    </>
  );
}

export default App;
