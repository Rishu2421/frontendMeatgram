import React from 'react';
import './FAQPage.css';

function FAQPage() {
  return (
    <div className="main-container-faqs">
   

      <div className="headind-faqs">
        <h1>Frequently Asked Questions (FAQs)</h1>
      </div>

      <div className="quetion-faqs">
        <details open>
          <summary>What is your shop name?</summary>
          <div className="faq__content">
            <p>ANSWER: MEATGRAM</p>
          </div>
        </details>

        <details>
          <summary>What are your hours of operation?</summary>
          <div className="faq__content">
            <p>ANSWER: We are open from 9 AM to 9 PM, Monday to Saturday.</p>
          </div>
        </details>

        {/* Add more FAQ items here */}
      </div>

      {/* <div className="faqs-footer">
        <p>&#169; Copyright 2023, All Rights Reserved</p>
      </div> */}
    </div>
  );
}

export default FAQPage;
