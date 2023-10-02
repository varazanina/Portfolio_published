import './App.css';
import { Navigation } from "./components/Sticky/Navigation";
import { Front } from "./components/Front/Front";
import { About } from "./components/About me/About";
import { Work } from "./components/Work/Work";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Logo } from "./components/Sticky/Logo";
import { Icons } from "./components/Sticky/Icons";
 
function App() {
  
  return (
    <div className="App">
      <div className="content">
        <Logo />
        <Icons />
        <Navigation />
        <Front />
        <About />
        <Work />
        <Contact />
        </div>
      <Footer />
    </div>
  );
}

export default App;
