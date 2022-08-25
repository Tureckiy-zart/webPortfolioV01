import "./App.css";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/header/Header";
import Navigation from "./components/nav/Navigation";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navigation />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer /> */}
    </div>
  );
}

export default App;
