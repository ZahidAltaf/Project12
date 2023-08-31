import React from 'react'
import './About.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const About = () => {
  // const NavbarItems = [
  //   {
  //     label: "Home",
  //     link: "/",
  //   },
  //   {
  //     label: "Products",
  //     link: "/products",
  //   },
  //   {
  //     label: "About",
  //     link: "/about",
  //   },
  // ];
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="containers col-lg-12 col-md-12 pb-5">
            <div className="pic" />
            <div className="box1" />
            <div className="box2" />
            <div className="social1">
              <i className="fa fa-facebook" aria-hidden="true" />
            </div>
            <div className="social2">
              <i className="fa fa-dribbble" aria-hidden="true" />
            </div>
            <div className="social3">
              <i className="fa fa-codepen" aria-hidden="true" />
            </div>
          </div>
          <div className="content col-md-offset-6 col-lg-offset-6">
            <center className="mt-5 pt-5">
              <h1 className="contentHead">ABOUT ME</h1>
            </center>
            <h2>
              Hi Folks, <br />
              <br />
              This is Shaik Maqsood. jus came up with this concept of having a
              45 background.
              <br />
              <br />
              Can't belive that it worked.
              <br />
              <br />
              Show your L<span>♥</span>VE if you like my pen.
              <br />
              <br />
              <p>(NOTICE: The lady in the PIC is not me, I'm a guy :P)</p>
              <p>
                <span
                  style={{ textAlign: "right", color: "#000000", fontSize: 18 }}
                >
                  * No matter what u say, that gal is sorta cute.
                </span>
              </p>
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About
