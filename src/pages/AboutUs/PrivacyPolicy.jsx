import { useEffect } from "react";
import "../../styles/pages/AboutUs/PrivacyPolicy.scss";
const PrivacyPolicy = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "Privacy Policy | KEANSBURG PARK";
  }, []);
  return (
    <div className="PrivacyPolicy">
      <h1>Privacy Policy</h1>
      <p
        style={{
          fontSize: "15pt",
          padding: "50px 0px",
          textAlign: "justify",
          lineHeight: "1.6",
        }}
      >
        At Keanburg Amusement Park, we are committed to protecting your privacy
        and ensuring the security of your personal information. When you visit
        our website or purchase tickets, we may collect certain data, such as
        your name, email address, and payment details, which are used solely for
        the purpose of processing your transactions and improving your overall
        experience with us. We assure you that your information is handled with
        the utmost confidentiality and will never be shared with third parties
        without your explicit consent, unless required by law. We utilize secure
        technology and industry-standard practices to safeguard your personal
        data against unauthorized access, loss, or misuse. By interacting with
        our services, you consent to the collection and use of your information
        as described in this policy. We are dedicated to maintaining a
        trustworthy and secure environment for all our guests, both online and
        within the park, and encourage you to contact us with any questions or
        concerns regarding your privacy. Your peace of mind is paramount to us,
        and we strive to maintain a transparent and secure relationship with
        every visitor to Keanburg.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
