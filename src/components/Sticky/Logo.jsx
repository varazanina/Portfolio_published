import "./logo.css";
import logo from "../../assets/logo.png";

export const Logo = () => {
  return (
    <div className="logo_div">
      <a href="#home"><img className="logo" src={logo} alt="logo" /></a>
    </div>
  )
}
