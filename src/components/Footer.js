import { logoURL } from "../utils/constants";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        fontSize: "2rem",

        color: "white",
      }}
    >
      <img src={logoURL} />
      <h4> Syed Saad Hussain 2026. reserved.</h4>
    </div>
  );
};


export default Footer;
