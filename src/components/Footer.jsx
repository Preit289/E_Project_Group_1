import "../styles/components/Footer.scss";
import logo from "../assets/img/logo.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null); // 'success' | 'error' | null

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Email validation (same regex as before)
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(email)) {
      setSubmissionResult("error");
      setTimeout(() => setSubmissionResult(null), 5000); // Clear error after 5s
      return;
    }

    setIsSubmitting(true);

    // Simulate subscription (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionResult("success");
      setEmail(""); // Clear the input on success

      setTimeout(() => setSubmissionResult(null), 8000); // Clear message after 8s
    }, 2000); // Simulate a 2-second delay
  };
  return (
    <>
      <div className="Footer">
        <div className="top-Footer">
          <div className="logo-Footer">
            <a href="/">
              <img src={logo} alt="Keanburg Park" />
            </a>
          </div>
          <div className="email-form">
            <div className="form">
              <div className="Title-form">
                <h2>Contact us here</h2>
                <p className="description">Subscribe for Updates weekly</p>
              </div>
              <div className="Content-form">
                <form onSubmit={handleSubmit} className="subscrbe-form">
                  <input
                    type="text" // Use type="email" for better validation
                    placeholder="Enter your email here "
                    value={email}
                    onChange={handleEmailChange}
                    name="email" // Add name attribute
                  />
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Subcribing." : "Subscribe"}
                    <i class="bx bx-mail-send"></i>
                  </button>
                </form>
                {submissionResult === "success" && (
                  <p className="success-message">Successfully!</p>
                )}
                {submissionResult === "error" && (
                  <p className="error-message">Please enter a valid email</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mid-Footer">
          <div className="list-Footer">
            <div className="title-list">Navigation</div>
            <div className="line-list"></div>
            <div className="content-list">
              <ul>
                <li>
                  <a href="/aboutus">About Us</a>
                </li>
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
                <li>
                  <a href="/activity">Activity</a>
                </li>
                <li>
                  <a href="/contactus">Contact Us</a>
                </li>
                <li>
                  <a href="/review">Review</a>
                </li>
                <li>
                  <a href="/tickets">Tickets</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="list-Footer">
            <div className="title-list">Legal Informations</div>
            <div className="line-list"></div>
            <div className="content-list">
              <ul>
                <li>
                  <a href="/disclamer-info">Disclamer</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/booking-terms">Ticket Booking Terms</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="list-Footer">
            <div className="title-list">Contact</div>
            <div className="line-list"></div>
            <div className="content-list">
              <ul>
                <li>
                  <div className="icon-contact"></div>
                  <div>Address</div>
                </li>
                <li>
                  <div className="icon-contact"></div>
                  <div>Phone number</div>
                </li>
                <li>
                  <div className="icon-contact"></div>
                  <div>Email</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="list-Footer">
            <div className="title-list">Introduce</div>
            <div className="line-list"></div>
            <div className="content-list">
              Keansburg Amusement Park offers a vibrant escape with a classic
              boardwalk feel. Experience thrilling rides, family-friendly
              attractions, and a lively arcade, all while savoring delicious
              seaside treats. From the soaring heights of the Ferris wheel to
              the friendly competition of skill games, Keansburg provides a day
              of unforgettable fun and memories for everyone..
            </div>
          </div>
        </div>
        <div className="bot-Footer">
          <div className="webcopyright">
            &copy; Copyright 2025 KEANSBURG PARK. All Rights Reserved
          </div>
          <div className="devcopyright">Developed by Group 1</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
