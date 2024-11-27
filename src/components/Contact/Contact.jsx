import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const navigate = useNavigate();
  const closeIconRef = useRef(null);

  const handleClose = () => {
    navigate("/");
  };

  useEffect(() => {
    if (closeIconRef.current) {
      closeIconRef.current.setAttribute("inert", "true");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("https://backend-service/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error: ", err);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-modal">
        <FontAwesomeIcon
          icon={faXmark}
          className="close-icon"
          onClick={handleClose}
          aria-label="Close Projects Section"
          tabIndex="0"
          ref={closeIconRef}
          role="button"
          aria-hidden="false"
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === " ") handleClose();
          }}
        />
        <section className="modal-content">
          <h2 className="contact-heading">Get in Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name" className="contact-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-input"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email" className="contact-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact-input"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message" className="contact-label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="contact-textarea"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>

          {status && <p className="status-message">{status}</p>}
        </section>
      </div>
    </section>
  );
};

export default Contact;
