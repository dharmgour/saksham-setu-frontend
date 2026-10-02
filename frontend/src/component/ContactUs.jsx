import { useState } from "react";
import "./ContactUs.css";
import {
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="contact-section">

      {/* Header */}
      <div className="contact-header">

        <span className="contact-badge">
          📩 Contact Saksham Setu
        </span>

        <h1>
          We're Here to
          <span> Help & Connect</span>
        </h1>

        <p>
          Have a question, suggestion, or feedback?
          Feel free to get in touch with us.
        </p>

      </div>


      {/* Contact Content */}
      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          <h2>Get in Touch</h2>

          <p>
            If you have any questions, suggestions, or feedback about
            Saksham Setu, you can contact us using the information below.
          </p>

          <div className="contact-item">

            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email</h3>
              <p>support@sakshamsetu.com</p>
            </div>

          </div>


          <div className="contact-item">

            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>Location</h3>
              <p>Indore, Madhya Pradesh, India</p>
            </div>

          </div>

        </div>


        {/* Contact Form */}
        <div className="contact-form">

          {!submitted ? (
            <>
              <h2>Send Us a Message</h2>

              <form>

                <div className="form-group">
                  <label>Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>


                <div className="form-group">
                  <label>Email</label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>


                <div className="form-group">
                  <label>Subject</label>

                  <input
                    type="text"
                    placeholder="Enter subject"
                    required
                  />
                </div>


                <div className="form-group">
                  <label>Message</label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>


                <button
                  type="button"
                  className="contact-btn"
                  onClick={() => setSubmitted(true)}
                >
                  Send Message
                </button>

              </form>
            </>
          ) : (

            /* Success Message */
            <div className="success-message">

              <div className="success-icon">
                ✓
              </div>

              <h2>Message Sent Successfully!</h2>

              <p>
                Thank you for contacting Saksham Setu.
                We appreciate your message and will get back to you soon.
              </p>

            </div>

          )}

        </div>

      </div>

    </section>
  );
};

export default ContactUs;