import React from "react";
import "./AboutMe.css";
import{FaGraduationCap,FaHandHoldingHeart}from 'react-icons/fa'
import{BsPersonFill} from 'react-icons/bs'

export default function AboutMe() {
  return (
   
    <div className="AboutMe-container">
      <div className="AboutMe-parent">
        <div className="border">
      </div>
        <div className="AboutMe-title">
          <h1> About Me</h1>
        </div>
        <div className="AboutMe-content-container">
          <div className="AboutMe-Me-container">
            <div className="AboutMe-Me-title">
              <h4>Who am I?<BsPersonFill/></h4>
            </div>
            <div className="AboutMe-Me">
              <p>
                My interest in how the internet worked peaked at a very young
                age, and I thought only geniuses knew how to work it. Now I'm
                one of those geniuses. I am a young, eager, Junior Dev looking
                for a development team to showcase my skills.
              </p>
            </div>
          </div>
          <div className="AboutMe-education-container">
            <div className="AboutMe-education-title">
              <h4>Education <FaGraduationCap/></h4>
            </div>
            <div className="AboutMe-education">
              <p>
                {" "}
                Woodland High School <span className="Dates">2016 - 2020</span>
              </p>
              <p>
                Georgia Tech Web Development Bootcamp{" "}
                <span className="Dates">March 2022 - June 2022</span>
              </p>
            </div>
          </div>
        </div>
        <div className="Values-column">
          <div className="AboutMe-values-container">
            <div className="AboutMe-values-title">
              <h4>Values<FaHandHoldingHeart/></h4>
            </div>
            <div className="AboutMe-values">
              <p>
                I value spending time with my family, and my dog Stanley (he's the cutest wiener dog ever). I love working with a team and having that sense of responsibility.  
              </p>
              <p> I also value being able to work by myself. It is nice to do a stand-up at the start of the day and going away to work privately. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
