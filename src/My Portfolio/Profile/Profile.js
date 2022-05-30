import React from "react";
import { FaLinkedinIn, FaGithub, FaRegEnvelopeOpen } from "react-icons/fa";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="column">
            <a
              className="profile-icons"
              href="https://www.linkedin.com/in/fisher-davis-562182180/"
            >
              <FaLinkedinIn />
            </a>
            <a className="profile-icons" href="https://github.com/Fisher-Davis">
              <FaGithub />
            </a>
            {/* come back and add route for email */}
            <a className="profile-icons" href="#">
              <FaRegEnvelopeOpen />
            </a>
          </div>
          <div className="profile-details-name">
            <h3>
              Hello, My name is{" "}
              <span className="highlighted-text">Fisher Davis</span>
            </h3>
          </div>
          <div className="profile-details-roles">
            <p>Full Stack Web Dev</p>
            <p>MERN stack Developer</p>
            <p>React Dev</p>
            
            
          </div>
          <div className="profile-buttons">
            <button className="profile-button-obj">Hire Me</button>
            <button className="profile-button-obj">My Resume</button>
          </div>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
    </div>
  );
}
