import react from "react";
import "./footer.css";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f59e0b33"
          fill-opacity="1"
          d="M0,96L48,122.7C96,149,192,203,288,197.3C384,192,480,128,576,112C672,96,768,128,864,165.3C960,203,1056,245,1152,266.7C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}
      <div className="footer">
        <li className="footer-list">
          <ul className="footer-list-items size">
            <AiOutlineLinkedin size="lg" />
          </ul>
          <ul className="footer-list-items size">
            <AiOutlineGithub size="lg" />
          </ul>
          <ul className="footer-list-items size">
            <AiOutlineTwitter size="lg" />
          </ul>
        </li>
        <p className="copy-ryt-line">© 2022 Flash Designs</p>
      </div>
    </>
  );
};
export default Footer;
