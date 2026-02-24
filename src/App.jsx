import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LenisScroll from "./components/LenisScroll";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

function App() {
  return (
    <>
      <LenisScroll />
      <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-neutral-950 text-black dark:text-white">
        <Navbar />
        <Header />
        <About />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
