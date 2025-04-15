import React from 'react';

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    alert('Subscribed successfully!');
  };

  return (
    <>
      <style>{`
        .subscribe-container {
          text-align: center;
          padding: 3rem 1rem;
        }

        .subscribe-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .subscribe-description {
          color: #9ca3af;
          margin-bottom: 2rem;
        }

        .subscribe-form {
          max-width: 500px;
          margin: 0 auto;
          display: flex;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          overflow: hidden;
        }

        .subscribe-input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: none;
          outline: none;
          font-size: 1rem;
          color: #111827;
        }

        .subscribe-button {
          background-color: #000;
          color: #fff;
          padding: 0 1.5rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .subscribe-button:hover {
          background-color: #222;
        }
      `}</style>

      <div className="subscribe-container">
        <h2 className="subscribe-title">Subscribe now &amp; get 20% off</h2>
        <p className="subscribe-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <form className="subscribe-form" onSubmit={onSubmitHandler}>
          <input
            type="email"
            className="subscribe-input"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="subscribe-button">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </>
  );
};

export default NewsletterBox;
