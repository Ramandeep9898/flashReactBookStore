import react from "react";
import footerLogo from "./flashLogo.svg";
import "./footer.css";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer">
        {/* logo  */}
        <li className="footer-sections">
          <div className="footer-logo">
            <img src={footerLogo} alt="" />
          </div>
        </li>

        {/* other projects link  */}
        <li className="footer-sections">
          <span className="footer-link-list  heading-font">
            Flash's Other Projects/Products
          </span>
          <li className="footer-list-items">Flash Ui</li>
          <li className="footer-list-items">Flash Video Library</li>
          <li className="footer-list-items">Flash Watch</li>
          <li className="footer-list-items">Flash Connect</li>
          <li className="footer-list-items">Flash keep</li>
        </li>

        {/* Porfolio lInk  */}
        <li className="footer-sections">
          <span className="footer-link-list  heading-font">Portfolio link</span>
          <li className="footer-list-items">Flash Ui</li>
        </li>

        {/* contact lInks */}
        <li className="footer-sections ">
          <span className="footer-link-list  heading-font">
            Flash's Other Projects/Products
          </span>
          <span className="footer-links">
            <AiOutlineLinkedin />
            <AiOutlineGithub />
            <AiOutlineTwitter />
          </span>
        </li>
      </div>
    </>
  );
};
export default Footer;
