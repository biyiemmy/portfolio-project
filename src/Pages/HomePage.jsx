import NavBar from "../Components/NavBar";
import AboutMe from "./AboutMe";
import Skills from "../Components/Skills";
import Services from "./Services";
import Testimony from "../Components/Testimony";
import ContactMe from "./ContactMe";
import Footer from "../Components/Footer";
import Home from "../Components/Home";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      <Services />
      <Testimony />
      <ContactMe />
      <Footer />
    </>
  );
};

export default HomePage;
