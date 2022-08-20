const ContactMe = () => {
  const formID = `https://formspree.io/f/${process.env.REACT_APP_FORM_ID}`;

  return (
    <section className="contact-me-section s-5" id="contact-me">
      <h2 className="section-title">Contact Me</h2>
      <form
        className="contact-form"
        method="POST"
        action={formID}
        autoComplete="off"
        id="contact-me-form"
      >
        <div className="form-item-1-div">
          <label htmlFor="name">
            Your Name <p className="red-asterisk">*</p>
          </label>
          <div>
            <input
              className="form-item-1"
              type="text"
              name="name"
              placeholder="Name"
              id="name"
              required
            />
            <span className="bottom"></span>
            <span className="right"></span>
            <span className="top"></span>
            <span className="left"></span>
          </div>
        </div>
        <div className="form-item-2-div">
          <label htmlFor="email">
            Your Email <p className="red-asterisk">*</p>
          </label>
          <div>
            <input
              className="form-item-2"
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              required
            />
            <span className="bottom"></span>
            <span className="right"></span>
            <span className="top"></span>
            <span className="left"></span>
          </div>
        </div>

        <div className="form-item-3-div">
          <label htmlFor="subject">
            Subject <p className="red-asterisk">*</p>
          </label>
          <div>
            <input
              className="form-item-3"
              name="subject"
              placeholder="Subject"
              id="subject"
              required
            />
            <span className="bottom"></span>
            <span className="right"></span>
            <span className="top"></span>
            <span className="left"></span>
          </div>
        </div>
        <div className="form-item-4-div">
          <label htmlFor="message">
            Your Message <p className="red-asterisk">*</p>
          </label>
          <div>
            <textarea
              className="form-item-4"
              name="message"
              placeholder="Message"
              id="message"
              required
            />
            <span className="bottom"></span>
            <span className="right"></span>
            <span className="top"></span>
            <span className="left"></span>
          </div>
        </div>
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
      </form>
    </section>
  );
};

export default ContactMe;
