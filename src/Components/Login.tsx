// src/Components/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await login(email, password);
      navigate('/teachers');
    } catch (err) {
      setError('Failed to sign in');
    }
  };

  return (
    <div className="container">
      
      <div className="photo-section">
      <p className='headerLoginSection'> Welcome to Eduverse! 👋</p>
        <img src="../../assets/loginp.svg" alt="Illustration" />
      </div>
      <div className="form-section">
        <h1>Eduverse</h1>
        <p>Welcome to Eduverse! 👋 Please sign-in to your account and start the adventure</p>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-actions">
            <label>
              <input type="checkbox" className="rem" /> Remember Me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">SIGN IN</button>
        </form>
        <p>New on our platform? <a href="#">Create an account</a></p>
      </div>
    </div>
  );
};

export default Login;
