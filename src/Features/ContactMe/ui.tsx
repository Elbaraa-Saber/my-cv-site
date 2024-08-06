import React, { useRef, useState } from "react";
import "./style.scss";
import emailjs from "emailjs-com";
import ContactImg from "../../Shared/Assets/Imgs/contactPage.png";
import { SecondArrow } from "../../Shared/UI/Icons/SecondArrow.tsx";
import { SendIcon } from "../../Shared/UI/Icons/SendIcon.tsx";

interface Props {
  id: string;
}
export const ContactMe = ({ id }: Props) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch User ID, Service ID, and Template ID from environment variables
    const userID = "Q2xBRSvtG3gWOfPjq";
    const templateID = "template_9m845zq";
    const serviceID = "service_5imu8ys";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email successfully sent!", response);
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setStatus("ERROR");
      });
  };

  return (
    <section className="contactMe" id={id}>
      <div className="container contactMe__container">
        <div className="contactMe__left">
          <h2 className="contactMe__title">
            Got a project in <span>mind?</span>
          </h2>
          <SecondArrow className="contactMe__arrowIcon" />
          <img className="contactMe__img" src={ContactImg} alt="contact" />
        </div>
        <form className="contactMe__right" onSubmit={handleSubmit}>
          <div className="contactMe__info">
            <div className="contactMe__name">
              <label htmlFor="name">Your Name</label>
              <input
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contactMe__email">
              <label htmlFor="email">Your Email</label>
              <input
                placeholder="email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="contactMe__message">
            <label htmlFor="message">Your Message</label>
            <textarea
              placeholder="Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button className="contactMe__submitBtn" type="submit">
            <span>Send Message</span>
            <SendIcon />
          </button>
          {status === "SUCCESS" && (
            <p className="contactMe__successMessage">
              Your message was sent successfully!
            </p>
          )}
          {status === "ERROR" && (
            <p className="contactMe__wrongMessage">
              Sorry, there was a problem sending your message.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
