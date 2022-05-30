import React from "react";
import "./ContactMe.css";
import { FaLinkedinIn, FaGithub, FaRegEnvelopeOpen } from "react-icons/fa";

function ContactMe() {
  return (
    <div>
      <div className="border"></div>
      <div className="ContactMe-container">
        <div className="ContactMe-parent">
          <div className="ContactMe-title">
            <h1>Contact Me</h1>
          </div>
          <div className="ContactMe-info">
            <div className="github-link">
              <a href="https://github.com/Fisher-Davis">
                <p>My Github: github.com/Fisher-Davis    <FaGithub/></p>
              </a>
            </div>
            <div className="linkedIn-link">
              <a href="https://www.linkedin.com/in/fisher-davis-562182180/">
                <p>My linkedIn: Fisher Davis    <FaLinkedinIn/></p>
              </a>
            </div>
            <div className="My-email">
              Email me at: <span className="email">fisherd02@yahoo.com    <FaRegEnvelopeOpen/></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
