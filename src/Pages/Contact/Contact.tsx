import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
// import "../common/ToastJs";

const Contact = () => {
  const [done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs.sendForm('service_8j26yek', '__ejs-test-mail-service__', form.current, 'kL3kbs04X9DP4Rd4j')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <h2 data-aos="fade-up">Contact</h2>
            <br />
            <form onSubmit={sendEmail} ref={form}>
              {/* <form ref={formRef}> */}
                <input data-aos="fade-up" type="text" placeholder="Your Name" className="form-control" name="user_name" required />
                <div className="row">
                  <div className="col-sm-6">
                    <input data-aos="fade-up" type="email" placeholder="Your Email" className="form-control" name="user_email" required />
                  </div>
                  <div className="col-sm-6">
                    <input data-aos="fade-up" type="text" placeholder="Contact Contact" className="form-control" name="user_contact" pattern="[0-9]{10}" title="Please enter valid number." required />
                  </div>
                </div>
                <input data-aos="fade-up" type="text" placeholder="Subject" className="form-control" name="user_subject" required />
                <textarea data-aos="fade-up" name="user_message" className="form-control" placeholder="Your Message" required></textarea>
                <br />
                <button data-aos="fade-up" type="submit" className="btn btn-primary">
                  Send
                </button>
                <br />
                <br />
                {done ? <p>Thank you for contacting :))</p> : null}
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
