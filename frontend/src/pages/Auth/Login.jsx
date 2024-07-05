import React, { useState } from 'react';
import { useAuth } from '../../Context/authContext';
import Layout from '../../components/Layout/Layout';
const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    await login(email, password);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
    </Layout>
  );
};

export default Login;
