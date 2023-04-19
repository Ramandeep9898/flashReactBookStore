import "./footer.css";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsMailbox } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-typography">
          <h4 className="h1">I Build beautiful and Fast Web Apps.</h4>
          <p className="mgT-16">
            Checkout my <span>Portfolio website.</span>
          </p>
        </div>

        <div className="footer-icons">
          <div className="flex flex-col ">
            <div className="flex icons-container">
              <AiOutlineLinkedin />
              <AiOutlineGithub />
              <AiOutlineTwitter />
            </div>
            <div className="footer-links mgT-16">
              <BsMailbox /> ramank6238299@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="divider divider-color"></div>
      <div className="footer-wrapper">
        <p className="text-center h5">© Copyright 2021, All Rights Reserved</p>
      </div>
    </div>
  );
};
