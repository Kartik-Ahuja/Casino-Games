import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookMessenger,
  FaTwitter,
  FaVimeo,
  FaSkype,
  FaRss,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SwipeableTemporaryDrawer from "./resnav";
import SwipeableTemporaryDrawer2 from "./resnav2";
// import { IoIosInformationCircle } from 'react-icons/io';
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="header-section">
        <div className="container">
          <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
            <div className="brand-logo d-none d-lg-inline-block">
              <div className="logo">
               <a style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                  <img src="images/WhatsApp_Image_2023-12-18_at_16.24.07_93e390b3-removebg-preview.png" style={{width:"150px"}} alt="logo" />
                </a> 
              
                
              </div>
            </div>
            <div className="header-menu-part">
              <div className="header-top">
                <div className="header-top-area">
                  <ul className="left">
                    <li>
                      <FaPhone /> <span>+917240650376</span>
                    </li>
                    <li>
                      <FaMapMarkerAlt />DHANI BARALA, Jhunjhunu
                    </li>
                  </ul>
                  <ul className="social-icons d-flex align-items-center">
                    <li>
                      <a
                        href=""
                        className="fb"
                      >
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="twitter"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="vimeo"
                      >
                        <FaTelegram />
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="skype"
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                    {/* <li>
                      <a href="" className="rss">
                        <FaRss />
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="header-bottom">
                <div className="header-wrapper justify-content-lg-end">
                  <div className="mobile-logo d-lg-none">
                    <a href="index.html">
                      <img src="images/WhatsApp_Image_2023-12-18_at_16.24.07_93e390b3-removebg-preview.png" alt="logo" />
                    </a>
                  </div>
                  <div className="menu-area">
                    <ul className="menu">
                      <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/")}
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/About")}
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/Tournament")}
                        >
                          Tournament
                        </a>
                      </li>
                      <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/AllGames")}
                        >
                          All Games
                        </a>
                      </li>
                      <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/Contact")}
                        >
                          Contact
                        </a>
                      </li>
                    </ul>

                      <li className="ResNav">
                        <SwipeableTemporaryDrawer/>
                      </li>
                      <li className="ResNav2">
                        <SwipeableTemporaryDrawer2/>
                      </li>
                    {/* <div className="header-bar d-lg-none">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="ellepsis-bar d-lg-none">
                      <i className="icofont-info-square" />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
