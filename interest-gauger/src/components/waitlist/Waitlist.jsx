import { useState } from 'react';
import './Waitlist.css';
import { subscribeUser } from '../../managers/subscribeManager';

export const Waitlist = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await subscribeUser({ firstName, lastName, email });

      console.log('Subscription successful:', data);
      setMessage('Thanks for signing up!');
      setIsError(false);
      // Clear the form
      setFirstName('');
      setLastName('');
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage('Something went wrong, please try again.');
      setIsError(true);
    }
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
      {message && (
        <p className={`waitlist-message ${isError ? 'error' : 'success'}`}>
          {message}
        </p>
      )}
    </div>
  );
};
