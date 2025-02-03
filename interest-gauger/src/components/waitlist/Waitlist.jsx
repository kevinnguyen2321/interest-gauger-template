import { useState } from 'react';
import './Waitlist.css';

export const Waitlist = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, simulate a submission
    setMessage('Thanks for signing up!');
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <div className="waitlist-container">
      <h1 className="waitlist-title">Join the Waitlist</h1>
      <p className="waitlist-subtitle">Be the first to know when we launch!</p>
      <form onSubmit={handleSubmit} className="waitlist-form">
        <div className="waitlist-input-group">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="waitlist-input"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="waitlist-input"
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="waitlist-input full-width"
          required
        />
        <button type="submit" className="waitlist-button">
          Sign Up
        </button>
      </form>
      {message && <p className="waitlist-message">{message}</p>}
    </div>
  );
};
