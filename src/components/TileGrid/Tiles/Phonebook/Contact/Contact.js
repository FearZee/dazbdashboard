import {Container} from "@mui/material";
import "./Contact.css"
import {Icon} from "@iconify/react";

function Contact() {
  return (
    <Container className="contact-container">
        <div className="contact-row">
          <div>
              <img className="avatar" src="/avatar.jpg" alt="avatar"/>
          </div>
          <div>
              <h3>Max Richter</h3>
              <a className="callButton" href="tel:+380442222222">
                  <Icon
                      width="3vw"
                      height="3vh"
                      icon="feather:phone-call"
                  />
              </a>
          </div>
        </div>
    </Container>
  );
}

export default Contact;