import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

import catag_1 from "../../img/catag_1.jpg";
import catag_2 from "../../img/catag_2.jpg";
import catag_3 from "../../img/catag_3.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* Quick Link */}
        <div className="footer-section">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Condition</a></li>
            <li><a href="#">FAQs & Help</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section contact-information">
          <h3>Contact</h3>
          <p>📍 Old, National Highway-8, Bholav, Bharuch, Gujarat 392002</p>
          <p>📞 +012 345 67890</p>
          <p>✉️ timelessscholars@gmail.com</p>
          <div className="social-links">
            <a href="https://x.com/TimelessScholar?t=u2ELmL80A7s1503Q69V9zQ&s=08"><AiFillTwitterSquare /></a>
            <a href="https://www.facebook.com/share/p/1DRTJATuBa/"><AiFillFacebook /></a>
            <a href="https://youtube.com/@timelessscholars-v1?si=QbTvtg8VCEPVaGdm"><AiFillYoutube /></a>
            <a href="https://www.linkedin.com/in/timeless-scholars-639951346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><AiFillLinkedin /></a>
          </div>
        </div>

        {/* Gallery */}
        <div className="footer-section">
          <h3>Gallery</h3>
          <div className="footer-gallery">
            <img src={catag_1} alt="img1" />
            <img src={catag_2} alt="img2" />
            <img src={catag_3} alt="img3" />
            <img src={catag_1} alt="img4" />
            <img src={catag_2} alt="img5" />
            <img src={catag_3} alt="img6" />
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Stay updated—subscribe now</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            
            <button>SignUp</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        © Timeless Scholars, All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
