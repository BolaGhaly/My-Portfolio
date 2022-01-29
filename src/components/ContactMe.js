import React from "react";

const ContactMe = () => {
  return (
    <section className="contact-me-section" id="contact-me">
      <h2 className="text-center">Contact Me</h2>
      <form
        className="contact-form"
        method="POST"
        action="https://formspree.io/f/mnqldkpe"
        autocomplete="off"
        id="contact-me-form"
      >
        <div className="form-item-1-div">
          <label>
            Your Name <span className="red-asterisk">*</span>
          </label>
          <div>
            <input
              className="form-item-1"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
        </div>
        <div className="form-item-2-div">
          <label>
            Your Email <span className="red-asterisk">*</span>
          </label>
          <div>
            <input
              className="form-item-2"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
        </div>

        <div className="form-item-3-div">
          <label>
            Subject <span className="red-asterisk">*</span>
          </label>
          <div>
            <input
              className="form-item-3"
              name="subject"
              placeholder="Subject"
              required
            />
          </div>
        </div>
        <div className="form-item-4-div">
          <label>
            Your Message <span className="red-asterisk">*</span>
          </label>
          <div>
            <textarea
              className="form-item-4"
              name="message"
              placeholder="Message"
              required
            />
          </div>
        </div>
      </form>
      <div className="d-flex">
        <button
          type="submit"
          class="form-submit-button m-auto bg-primary"
          target="_blank"
          form="contact-me-form"
          rel="noopener noreferrer"
        >
          SEND
        </button>
      </div>
    </section>
  );
};

export default ContactMe;
