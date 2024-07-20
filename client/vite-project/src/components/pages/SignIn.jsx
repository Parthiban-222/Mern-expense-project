import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setErrorMessage('');

    if (!email) {
      setEmailError('Please enter your email');
      return;
    }

    if (!password) {
      setPasswordError('Please enter your password');
      return;
    }

    axios.post('http://localhost:5173/signin', { email, password })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          toast.success('Sign In successful!');
          navigate('/');
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          setErrorMessage('Incorrect email or password');
        } else {
          console.log(err);
          setErrorMessage('An unexpected error occurred');
        }
      });
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="email">Username:</label>
        <input
          type="email"
          id="email"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       {/* we need to change the emailerror*/}
        {emailError && <p className="error-message">{emailError}</p>}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="error-message">{emailError}</p>}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
        <button type="submit">Sign Up</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default SignIn;
