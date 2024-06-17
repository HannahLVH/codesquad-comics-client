import React from "react";

const Footer = () => {
  return (
    <main>
      <footer className="footer-text-styling footer-link-styling">
        <div className="footer-menu">
          <div className="visit-us">
            <h3>VISIT US</h3>
            <p>
              CodeSquad Comics
              <br />
              Dorchester Ave
              <br />
              Boston, MA 02124
            </p>
          </div>
          <div>
            <h3>LINKS</h3>
            <a href="#">Home</a>
            <br />
            <a href="#">About</a>
            <br />
            <a href="#">Login</a>
          </div>
          <div>
            <h3>FOLLOW US</h3>
            <div className="footer-socials">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
          <div>
            <h3>A PRODUCT OF</h3>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="./images/CodeSquad-logo.png"
                alt="The Code Squad logo: a red opening angle bracket and a black closing angle bracket followed by the word 'CODE' in red upper case letters and the word 'SQUAD' written underneath in black upper case letters. Right below the suffix '.org' is written in red upper case letters"
                className="footer-codesquad-logo"
              />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
