import "./brand.css";
import { Link } from "react-router-dom";

//import logo from "../../assets/logo E-comerse.png";
const Brand = () => {
  return (
    <div className="logoTipo">
      <Link to="/">   <img
        className="logo"
        src="https://seeklogo.com/images/S/s-h-i-e-l-d-logo-F89847BD30-seeklogo.com.png"
        alt=""
      /></Link>
      <p>shop react</p>
    </div>
  );
};

export default Brand;
