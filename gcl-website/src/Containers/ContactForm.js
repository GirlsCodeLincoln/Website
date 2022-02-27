const ContactForm = () => {
  return (
    <section className="col-12 py-5" id="contact">
      <div className="text-center text-white mb-5">
        <h2 className="font-weight-bold">Contact</h2>
        <i>Send us a message and we will get back to you soon!</i>
      </div>
      <form
        className="col-10 col-lg-6 mx-auto text-white"
        data-netlify="true"
        data-netlify-recaptcha="true"
        method="POST"
        name="contact"
        netlify-honeypot="bot-field"
      >
        <div className="row">
          <p className="d-none">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div className="form-group col-sm-6">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              name="name"
              placeholder="Enter name"
              required
              type="text"
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              name="email"
              placeholder="Enter email"
              required
              type="email"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            name="message"
            placeholder="Enter your message"
            required
            rows="5"
          ></textarea>
        </div>
        <div className="text-center mb-3" data-netlify-recaptcha="true"></div>
        <div className="text-center">
          <button className="btn cta-btn" name="submit" type="submit">
            <i className="fas fa-paper-plane text-dark mr-2"></i>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
