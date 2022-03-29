import React from "react";

function Contact() {
  return (
    <section className="contact">
      <h2 data-testid="h1tag">Get in touch with me!</h2>
      <h1 className="info">Cell: 203-246-5155</h1>
      <h1 className="info">Email: <a className="contactInfo" href="mailto: t.maher621@gmail.com">t.maher621@gmail.com</a></h1>
      <h1 className="info"><a className="contactInfo" href="https://www.linkedin.com/in/thomas-maher-0b3615217/">LinkedIn</a></h1>

    </section>
  );
}

export default Contact;