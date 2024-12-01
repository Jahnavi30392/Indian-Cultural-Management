import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({ fname: '', lname: '', email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/signup", formData);
      alert('Signup successful!');
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error("There was an error signing up:", error);
      alert("Signup failed. Please try again.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.formContainer}>
        <div style={{ ...styles.box, opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(30px)' }}>
          <h2 style={styles.heading}>SIGNUP</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>First Name:</label>
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your first name"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Last Name:</label>
              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your last name"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your email"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" style={styles.button}>SIGNUP</button>
          </form>
          <div style={styles.linkContainer}>
            <span style={styles.linkText}>Already have an account?</span>
            <button type="button" style={styles.linkButton} onClick={() => navigate('/login')}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundImage: 'url("https://img.freepik.com/free-photo/lohri-celebration-india_23-2151150960.jpg?t=st=1731512058~exp=1731515658~hmac=db205b6f47429e0578796a06c322b6afbd7a0b497686978a6996fd12f6810fb0&w=1380")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay to make the form more readable
    zIndex: 1,
  },
  formContainer: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Light background for form contrast
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
    marginRight: '50px',
  },
  box: {
    textAlign: 'center',
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
  },
  heading: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '26px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#00aaff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
    marginTop: '15px',
  },
  linkContainer: {
    marginTop: '20px',
  },
  linkText: {
    fontSize: '14px',
    color: '#555',
  },
  linkButton: {
    fontSize: '14px',
    color: '#00aaff',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
    marginLeft: '5px',
  },
};

export default Signup;
