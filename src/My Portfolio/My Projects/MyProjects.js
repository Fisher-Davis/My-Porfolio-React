import React from "react";
import "./MyProjects.css";

export default function MyProjects() {
  return (
    <div className="MyProjects-container">
      <div className="MyProjects-parent">
        <div className="border"></div>
        <div className="MyProjects-title">
          <h1>My Projects</h1>
        </div>
        <div className="Card-container">
          <div className="Card-container-parent">
            <div className="Card">
              <h5> UNN </h5>
              <div className="UNN-img">
                <div className="UNN-img-background"></div>
              </div>
              <div className="project-info">
                <p>
                  Ukraine News Network is a project that three of my classmates
                  and I made to inform people who wish to be informed about what
                  is happening in Ukraine.
                </p>
              </div>
            </div>
            <div className="Card">
              <h5> Project 2 </h5>
              <div className="UNN-img">
                <div className="UNN-img-background"></div>
              </div>
              <div className="project-info">
                <p>
                  Ukraine News Network is a project that three of my classmates
                  and I made to inform people who wish to be informed about what
                  is happening in Ukraine.
                </p>
              </div>
            </div>
          </div>
          <div className="Card-container-parent">
            <div className="Card">
              <h5> project 3 </h5>
              <div className="UNN-img">
                <div className="UNN-img-background"></div>
              </div>
              <div className="project-info">
                <p>
                  Ukraine News Network is a project that three of my classmates
                  and I made to inform people who wish to be informed about what
                  is happening in Ukraine.
                </p>
              </div>
            </div>
            <div className="Card">
              <h5> project 4 </h5>
              <div className="UNN-img">
                <div className="UNN-img-background"></div>
              </div>
              <div className="project-info">
                <p>
                  Ukraine News Network is a project that three of my classmates
                  and I made to inform people who wish to be informed about what
                  is happening in Ukraine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
