import React, { useEffect, useState } from "react";
import firebase from "./firebase";
const About = ({height}) => {
  const [resumeURL, setResumeURL] = useState("");
  useEffect(() => {
    const storageRef = firebase.storage().ref();
    var listRef = storageRef.child("resume/");
    listRef
      .listAll()
      .then(function (res) {
        res.items.forEach(function (itemRef) {
          itemRef
            .getDownloadURL()
            .then(function (url) {
              // console.log(url);
              setResumeURL(url);
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="about-container">
      <span className="about-name">
        {" "}
        <span className="first-name">Krishna</span> Sharma
      </span>
      <ul className="about-points">
        <li>Software developer aiming for excellence.</li>
        <li>
          Undergraduate computer science student at Sanskar College of
          Engineering and Technology in final year.
        </li>
      </ul>

      <div className="about-me">
        <i className="fa-sharp fa-solid fa-location-dot">
          <span>Uttar Pradesh, India</span>
        </i>
        <i className="fa-solid fa-envelope">
          <span>Ks9192174414@gmail.com</span>
        </i>
        <i className="fa-solid fa-phone">
          <span>+91-8171841691</span>
        </i>
      </div>

      <div className="social-profiles">
        <a
          href="https://www.linkedin.com/in/rarecode/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/rarecode00"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a href={resumeURL} rel = 'noreferrer' target = '_blank'>
          <button>
            <i className="fa-solid fa-cloud-arrow-down"></i>
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
