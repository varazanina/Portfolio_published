import './navigation.css';
import Home from "../../assets/home_icon.png";
import About from "../../assets/about_me_icon.png";
import Work from "../../assets/work_icon.png";
import Contact from "../../assets/contact_icon.png"

export const Navigation = () => {

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='navbar'>
      <a href="#home" className='icon' onClick={() => smoothScrollTo('home')}>
        <img src={Home} alt="Home" />
        <span className="icon-text">Home</span>
      </a>
      <a href="#about" className='icon' onClick={() => smoothScrollTo('about')}>
        <img src={About} alt="About me" />
        <span className="icon-text">About me</span>
      </a>
      <a href="#projects" className='icon' onClick={() => smoothScrollTo('projects')}>
        <img src={Work} alt="Projects and cases" />
        <span className="icon-text">Projects</span></a>
      <a href="#contact" className='icon' onClick={() => smoothScrollTo('contact')}>
        <img src={Contact} alt="Contact" />
        <span className="icon-text">Contact</span>
      </a>
    </nav>
  );
}

