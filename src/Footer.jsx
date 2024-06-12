import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const isEmailValid = /\S+@\S+\.\S+/.test(email);

 
  const hours = 'Mon-Fri: 9 AM - 6 PM';
  const place1 = '123 Main St, City1';
  const place2 = '456 Oak St, City2';

  const contacts = [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  ];

  return (
    <footer className="footer-container">
      <h2>Receive delicious news! </h2>
      <p>*Email</p>
      <div className="subscribe-container">
        <input
          type="email"
          placeholder="Your email"
          className={`email-input ${isEmailValid ? '' : 'invalid'}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={`subscribe-button ${isEmailValid ? 'green' : ''}`}
        >
          {isEmailValid ? 'Subscribe' : 'Enter email'}
        </button>
      </div>

     
      <div className="footer-info-row">
        <div className="footer-info">
          <p><strong>Hours</strong></p>
          <p><u>{hours}</u></p>
        </div>
        <div className="footer-info">
          <p><strong>Palo Alto</strong></p>
          <p><u>{place1}</u></p>
        </div>
        <div className="footer-info">
          <p><strong>Los Altos</strong></p>
          <p><u>{place2}</u></p>
        </div>
       
        {contacts.map((contact) => (
          <div className="footer-info" >
            <p><strong>{contact.name}</strong></p>
            <p><u>Email: {contact.email}</u></p>
            <p><u>Phone: {contact.phone}</u></p>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
