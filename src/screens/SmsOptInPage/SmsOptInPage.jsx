import { useState } from 'react';
import './style.css';

export const SmsOptInPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validatePhoneNumber = (phone) => {
    // Remove all non-digits
    const cleaned = phone.replace(/\D/g, '');
    // Check if it's 10 digits (US format)
    return cleaned.length === 10;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!phoneNumber.trim()) {
      setError('Please enter a valid phone number');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    // Simulate saving the phone number
    console.log('Phone number submitted:', phoneNumber);
    
    // Show confirmation
    setIsSubmitted(true);
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
    if (error) setError('');
  };

  if (isSubmitted) {
    return (
      <div className="sms-opt-in-page">
        <div className="sms-form-card">
          <div className="confirmation-message">
            <h2>Thank you!</h2>
            <p>You are now subscribed to SMS updates. Reply STOP to unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sms-opt-in-page">
      <div className="sms-form-card">
        <h2>SMS Updates</h2>
        <form onSubmit={handleSubmit} className="sms-form">
          <div className="input-group">
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="Enter your phone number"
              className={`phone-input ${error ? 'error' : ''}`}
            />
            {error && <div className="error-message">{error}</div>}
          </div>
          
          <div className="consent-text">
            I agree to receive text messages from JR Learning Labs for interactive movie viewings, event reminders, interactive prompts, and occasional promotions. Reply STOP to unsubscribe.
          </div>
          
          <button type="submit" className="submit-button">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};