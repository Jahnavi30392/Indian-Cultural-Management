import React, { useState } from 'react';

function ForgetPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here (e.g., API call)
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("https://wallpapers.com/images/featured/indian-aesthetic-a2nktltm2r9dlrlo.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  box: {
    backgroundColor: 'rgba(210, 180, 140, 0.9)',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
    width: '300px',
    textAlign: 'left',
  },
  heading: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '22px',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    marginBottom: '5px',
    color: '#555',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    width: '100%',
    boxSizing: 'border-box',
    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    marginTop: '15px',
  },
};

export default ForgetPassword;
