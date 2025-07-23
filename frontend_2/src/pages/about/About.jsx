// About.jsx
import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <section className="about-section">
        <h2>About Us</h2>
        <p className="intro">
          At Timeless Scholars, we believe education is a right, not a privilege.
          Our mission is to offer free, high-quality resources to everyone with
          internet access, supporting your journey whether you're preparing for
          exams, aiming for top marks, or building confidence in your studies.
        </p>
        <p className="mission">
          Our platform is designed to be a lifeline for students during their
          most critical moments, offering curated materials that focus on what
          truly matters.
        </p>
        <ul className="about-features">
          <li>
            → 📓 <strong>Completely Free Resources</strong>
          </li>
          <li>
            → 🌟 <strong>Quality Content</strong>
          </li>
          <li>
            → 👍 <strong>A Platform for Every Learner</strong>
          </li>
          <li>
            → 📚 <strong>Exam-Focused Study Materials</strong>
          </li>
          <li>
            → 💡 <strong>Innovative Solutions</strong>
          </li>
        </ul>
      </section>

      <section className="contact-query">
        <h2>Contact For Any Query</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              Feel free to reach out to us for any questions or assistance. Our
              team is ready to help you with whatever you need.
            </p>
            <p>
              <strong>📍 Office:</strong> Old, National Highway-8, Bholav,
              Bharuch, Gujarat 392002
            </p>
            <p>
              <strong>📞 Mobile:</strong> +012 345 67890
            </p>
            <p>
              <strong>📧 Email:</strong> timelessscholars@gmail.com
            </p>
          </div>

          <div className="map-form">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.775975236206!2d72.99302727516403!3d21.20194008048167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be03fd93bc60d91%3A0x42e9db5c32c8df92!2sGovernment%20Engineering%20College%2C%20Bharuch!5e0!3m2!1sen!2sin!4v1658913507047!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
