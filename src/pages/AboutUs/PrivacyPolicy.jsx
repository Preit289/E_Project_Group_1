import { useEffect } from "react";
import "../../styles/pages/AboutUs/PrivacyPolicy.scss";
const PrivacyPolicy = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "Privacy Policy | KEANSBURG PARK";
  }, []);
  return (
    <div className="PrivacyPolicy">
      <div className="redBlock">
        <h2>Privacy Policy</h2>
      </div>
      <p
        style={{
          fontSize: "15pt",
          padding: "50px 0",
          textAlign: "justify",
          lineHeight: "1.6",
        }}
      >
        <b>1. Information Collection:</b>
        <br />
        In a real-world scenario, we may collect personal information such as
        your name, email address, and payment details when you interact with our
        services. However, this website does not collect or store any real user
        data.
        <br />
        <br />
        <b>2. Use of Information:</b>
        <br />
        If this were a real website, your information would be used solely for
        processing transactions, improving your experience, and communicating
        with you. We would never share your data with third parties without your
        explicit consent, unless required by law.
        <br />
        <br />
        <b>3. Data Security:</b>
        <br />
        In a real-world application, we would use secure technology and
        industry-standard practices to protect your data from unauthorized
        access, loss, or misuse. However, since this is an educational project,
        no real data is collected or stored.
        <br />
        <br />
        <b>4. Your Consent:</b>
        <br />
        By using this website, you acknowledge that it is for illustrative
        purposes only and does not involve real data collection or processing.
        <br />
        <br />
        <b>5. Contact Us:</b>
        <br />
        If you have any questions or concerns about this website, please contact
        us at: <strong>info@keansburgamusementpark.com</strong>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
