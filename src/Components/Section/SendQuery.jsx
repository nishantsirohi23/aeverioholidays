import React from 'react';

function SendQuery() {
  return (
    <section className="send-query-section" id="send-query">
      <div className="send-query-container">
        <h2 className="send-query-title">Get Personalized Travel Recommendations</h2>
        <p className="send-query-subtitle">
          Tell us about your travel preferences and we'll send you customized trip ideas on WhatsApp!
        </p>

        <form className="send-query-form">
          <input type="text" placeholder="Your name" className="form-input" />
          <input type="text" placeholder="WhatsApp number" className="form-input" />

          <select className="form-input">
            <option>Budget per person</option>
            <option>₹5,000 - ₹10,000</option>
            <option>₹10,000 - ₹20,000</option>
            <option>₹20,000+</option>
          </select>

          <select className="form-input">
            <option>Number of travelers</option>
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </select>

          <select className="form-input full-width">
            <option>Trip type</option>
            <option>Adventure</option>
            <option>Relaxation</option>
            <option>Honeymoon</option>
            <option>Family</option>
          </select>

          <button type="submit" className="submit-button full-width">
            Get Trips on WhatsApp
          </button>
        </form>

        <p className="disclaimer">
          By submitting this form, you agree to receive trip recommendations via WhatsApp from Aerovia.
        </p>
      </div>
    </section>
  );
}

export default SendQuery;
