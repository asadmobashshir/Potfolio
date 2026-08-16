import { MdArrowOutward, MdCopyright, MdEmail, MdPhone } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/mobashshirasad/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Mobashshir Asad
              </a>
            </p>
            
            <h4>Contact Info</h4>
            <p>
              <MdPhone /> <a href="tel:+919939104722">+91 99391 04722</a>
            </p>
            <p>
              <MdEmail /> <a href="mailto:mobashshirasad4863@gmail.com">mobashshirasad4863@gmail.com</a>
            </p>
            
            <h4>Education</h4>
            <p>
              B.Tech Computer Science, Jamia Hamdard University <br />
              Delhi, India
            </p>
          </div>
          
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/asadmobashshir"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/mobashshirasad/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/asad_mobashshir/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Mobashshir Asad</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;