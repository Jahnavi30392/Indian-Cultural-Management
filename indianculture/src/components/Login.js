import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import config from "../config"

function Login() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${config.baseURL}/signin`, {
        params: {
          email: formData.email,
          password: formData.password,
        },
      });
      const result = response.data;
      if (result === 'admin') {
        alert('Welcome Admin!');
        navigate('/admin-dashboard');
      } else if (result === 'yes') {
        alert('Login successful!');
        navigate('/user-dashboard');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred during login.");
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
          <h2 style={styles.heading}>LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your email"
                required
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
                required
              />
            </div>

            <button type="submit" style={styles.button}>LOGIN</button>
          </form>
          <div style={styles.linkContainer}>
            <span style={styles.linkText}>Don’t have an account?</span>
            <button type="button" style={styles.linkButton} onClick={() => navigate('/signup')}>
              Sign Up
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
    backgroundImage: 'url("https://img.freepik.com/free-photo/lohri-celebration-india_23-2151150957.jpg?ga=GA1.1.423482934.1731511540&semt=ais_hybrid")',
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

export default Login;
