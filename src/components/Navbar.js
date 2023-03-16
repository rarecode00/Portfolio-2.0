import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import firebase from "./firebase";
import LoadingSpinner from "./LoadingSpinner";

const Navbar = ({width}) => {
  const [imageURL, setImageURL] = useState("");
  const [loading , setLoading] = useState(true)
  const location = useLocation();
  useEffect(() => {
    const storageRef = firebase.storage().ref();
    var listRef = storageRef.child("profile/");
    listRef
      .listAll()
      .then(function (res) {
        res.items.forEach(function (itemRef) {
          itemRef
            .getDownloadURL()
            .then(function (url) {
              // console.log(url)
              setImageURL(url);
              setLoading(false)
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
    <>
      {width > 1176 ? (
        <div className="nav-side">
          <div className="profile">
          {/* <LoadingSpinner/>            */}
            <div>
              {              
              loading ? <LoadingSpinner/> : <img src={imageURL} alt = 'profileImage' /> 
              }
              <p className="name">Krishna Sharma</p>
              <div className="title">Software Engineer</div>
              <div className="title">Full stack developer</div>
            </div>
          </div>
          <div className="nav-items">
            <Link
              to="/"
              className={location.pathname === "/" ? "border" : "br-none"}
            >
              About
            </Link>
            <Link
              to="/experience"
              className={
                location.pathname === "/experience" ? "border" : "br-none"
              }
            >
              Experience
            </Link>
            <Link
              to="/education"
              className={
                location.pathname === "/education" ? "border" : "br-none"
              }
            >
              Education
            </Link>
            <Link
              to="/skills"
              className={location.pathname === "/skills" ? "border" : "br-none"}
            >
              Skills
            </Link>
            <Link
              to="/interest"
              className={
                location.pathname === "/interest" ? "border" : "br-none"
              }
            >
              Interest
            </Link>
          </div>
        </div>
      ) : (
        // Navbar changes on changes the width of webpage (Media queries)
        <>
          <div className="q-name">Krishna Sharma</div>
          <div>
          <div className="q-navbar">
            <Link
              to="/"
              className={location.pathname === "/" ? "q-border" : "br-none"}
            >
             {width <= 794 ? <i class="fa-solid fa-house"></i> : 'About'}
            </Link>
            <Link
              to="/experience"
              className={
                location.pathname === "/experience" ? "q-border" : "br-none"
              }
            >
              {width <= 794 ? <i class="fa-solid fa-code-branch"></i> : 'Experience'}
            </Link>
            <Link
              to="/education"
              className={
                location.pathname === "/education" ? "q-border" : "br-none"
              }
            >
              {width <= 794 ? <i class="fa-solid fa-graduation-cap"></i> : 'Education'}
            </Link>
            <Link
              to="/skills"
              className={location.pathname === "/skills" ? "q-border" : "br-none"}
            >
              {width <= 794 ? <i class="fa-solid fa-gear"></i> : 'Skills'}
            </Link>
            <Link
              to="/interest"
              className={
                location.pathname === "/interest" ? "q-border" : "br-none"
              }
            >
              {width <= 794 ? <i class="fa-sharp fa-solid fa-heart"></i> : 'Interest'}
            </Link>
          </div>
          </div>
        </>
      )}
    </>
  );
};
export default Navbar;
