import React from 'react'
import './PrivecyPolicy.css'


const PrivecyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="container">
        <h1 className="title">Privacy Policy</h1>
        <p className="intro">
          We value your privacy. This Privacy Policy explains how we collect, use, and protect your information when using our services. By using our website, you agree to the collection and use of information as described in this policy.
        </p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, etc.</li>
            <li><strong>Usage Data:</strong> Information about your interactions with our website.</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>Your data is used to improve our services and to:</p>
          <ul>
            <li>Provide and manage our services effectively.</li>
            <li>Send updates, newsletters, or promotional offers.</li>
            <li>Respond to customer support requests.</li>
          </ul>
        </section>

        <section>
          <h2>3. Sharing Your Information</h2>
          <p>We do not share your personal information with third parties except in the following cases:</p>
          <ul>
            <li>Service providers (e.g., hosting, analytics).</li>
            <li>Compliance with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2>4. Your Data Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and update your personal information.</li>
            <li>Request deletion of your data.</li>
            <li>Opt out of marketing communications.</li>
          </ul>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>We implement robust security measures to protect your data. However, no method of data transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
        </section>

        <section>
          <h2>6. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Please review it periodically for any changes.</p>
        </section>

        <section>
          <h2>7. Comments</h2>
          <p>When visitors leave comments on the site, we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help with spam detection. An anonymized string created from your email address (also known as a hash) may be provided to the Gravatar service to check if you are using it. The Gravatar service privacy policy can be found <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer">here</a>. After approval of your comment, your profile picture will be visible to the public in the context of your comment.</p>
        </section>

        <section>
          <h2>8. Media</h2>
          <p>If you upload images to the website, avoid uploading images with embedded location data (EXIF GPS). Visitors to the website can download and extract any location data from images on the website.</p>
        </section>

        <section>
          <h2>9. Cookies</h2>
          <p>If you leave a comment on our site, you may opt-in to saving your name, email address, and website in cookies. These cookies are for your convenience so you do not have to fill in your details again when leaving another comment. These cookies will last for one year.</p>
        </section>

        <section>
          <h2>10. Embedded Content from Other Websites</h2>
          <p>Articles on this site may include embedded content (e.g., videos, images, articles, etc.). Embedded content from other websites behaves exactly the same as if you visited the other website.</p>
        </section>

        <section>
          <h2>11. Who We Share Your Data With</h2>
          <p>If you request a password reset, your IP address will be included in the reset email.</p>
        </section>

        <section>
          <h2>12. How Long We Retain Your Data</h2>
          <p>If you leave a comment, the comment and its metadata are retained indefinitely. This allows us to recognize and approve any follow-up comments automatically.</p>
        </section>

        <section>
          <h2>13. What Rights You Have Over Your Data</h2>
          <p>You can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you.</p>
        </section>

        <section>
          <h2>14. Where Your Data is Sent</h2>
          <p>Visitor comments may be checked through an automated spam detection service.</p>
        </section>

        <section>
          <h2>15. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul>
            <li>Email: <a href="mailto:support@example.com">support@example.com</a></li>
            <li>Phone: +123 456 7890</li>
          </ul>
        </section>
      </div>
    </div>
  );
};


export default PrivecyPolicy
