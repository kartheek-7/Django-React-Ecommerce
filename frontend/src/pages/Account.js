import React, { useState } from 'react';
import { useAuth } from '../components/AuthContext'
import '../styles/Account.css';
import axios from 'axios';

const Account = () => {
  const { user, login, logout } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: ''});
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const response = await axios.post('/api/user/login/', {
          username: formData.email,
          password: formData.password,
        });
        login(response.data);
      } else {
        const response = await axios.post('/api/user/register/', {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        login(response.data);
      }
    } catch (error) {
      setError('Login or registration failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      {user ? (
        <>
          <h2 style={{ fontSize: '1.5em', fontWeight: 650 , padding: '40px'}}>Hi, {user.username}</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2 style={{ fontSize: '1.5em', margin: '3.5em 0 0 1.5em', fontWeight: 650 }}>
            {isLogin ? 'Login' : 'Register'}
          </h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
          </form>
          <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer' }}>
            {isLogin ? 'Need an account? Register here.' : 'Already have an account? Log in here.'}
          </p>
        </>
      )}
    </div>
  );
};

export default Account;
