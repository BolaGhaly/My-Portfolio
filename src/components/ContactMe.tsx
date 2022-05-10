/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from "react";

const ContactMe = () => {
  const [formID, setFormID] = useState(
    `https://formspree.io/f/${process.env.REACT_APP_FORM_ID}`
  );

  return (
    <section className="contact-me-section s-5" id="contact-me">
      <h2>Contact Me</h2>
      <form
        className="contact-form"
        method="POST"
        action={formID}
        autoComplete="off"
        id="contact-me-form"
      >
        <div className="form-item-1-div">
          <label>
            Your Name <p className="red-asterisk">*</p>
          </label>
          <div>
            <input
              className="form-item-1"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <span className="bottom"></span>
            <span className="right"></span>
            <span className="top"></span>
            <span className="left"></span>
          </div>
        </div>
        <div className="form-item-2-div">
          <label>
            Your Email <p className="red-asterisk">*</p>
          </label>
          <div>
            <input
              className="form-item-2"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <span className="bottom"></span>
            <span className="right"></span>
            <span className="top"></span>
            <span className="left"></span>
          </div>
        </div>

        <div className="form-item-3-div">
          <label>
            Subject <p className="red-asterisk">*</p>
          </label>
          <div>
            <input
              className="form-item-3"
              name="subject"
              placeholder="Subject"
              required
            />
            <span className="bottom"></span>
            <span className="right"></span>
            <span className="top"></span>
            <span className="left"></span>
          </div>
        </div>
        <div className="form-item-4-div">
          <label>
            Your Message <p className="red-asterisk">*</p>
          </label>
          <div>
            <textarea
              className="form-item-4"
              name="message"
              placeholder="Message"
              required
            />
            <span className="bottom"></span>
            <span className="right"></span>
            <span className="top"></span>
            <span className="left"></span>
          </div>
        </div>
      </form>
      <div className="d-flex">
        <button
          type="submit"
          className="form-submit-button m-auto"
          formTarget="_blank"
          form="contact-me-form"
        >
          SEND
        </button>
      </div>
    </section>
  );
};

export default ContactMe;
