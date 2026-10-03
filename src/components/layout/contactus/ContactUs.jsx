import "./ContactUs.scss";
import { useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';
import ContactUsMainImage  from '/src/assets/svg/contact-us-main.svg';

export default function ContactUs() {
  const [state, handleSubmit] = useForm("xnpnelll");

  useEffect(() => {
    if (!state.succeeded) return;

    const timer = setTimeout(() => {
      window.location.reload();
    }, 3000);

    return () => clearTimeout(timer);
  }, [state.succeeded]);


  return (
    <div className="contact-container">
      <div className="contact-content-left">
        <img src={ContactUsMainImage} alt="Contact Us" className="contact-image" />
      </div>
      <div className="contact-content-right">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">Have questions? Get in touch with us!</p>

        {state.succeeded ? (
          <p>Thank you for your message!</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="name" className="contact-form-label">Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" className="contact-form-input" required />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className="contact-form-group">
              <label htmlFor="email" className="contact-form-label">Email</label>
              <input type="email" id="email" name="email" placeholder="johndoe@email.com" className="contact-form-input" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="contact-form-group">
              <label htmlFor="message" className="contact-form-label">Message</label>
              <textarea id="message" name="message" className="contact-form-textarea" placeholder="Type a message here..." rows="5" required></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button type="submit" className="contact-form-button" disabled={state.submitting}>
              {state.submitting ? "Sending..." : "Submit"}
            </button>
            <ValidationError errors={state.errors} />
          </form>
        )}

      </div>
    </div>
  )
}
