import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import WhyUs from "./components/WhyUs";
import Port from "./components/Port";
import Menu from "./components/Menu";
import Testimmonial from "./components/Testimmonial";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm"
import GallerySlider from "./components/GallerySlider";
import BookTable from "./components/BookTable";
import Chefs from "./components/Chefs";
import Events from "./components/Events"
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About/>
      <WhyUs/>
      <Port />
      <Menu/>
      <Testimmonial />
      <Events/>
      <Chefs/>
      <BookTable/>
      <GallerySlider />
      <ContactForm />
      <Footer/>

      
   </div>
  );
}

export default App;
