import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";



const LoginRegister = () => {

  const [action, setAction] = useState('');

  const registerLink = () => {
    setAction(' active');
  };

  const loginLink = () => {
    setAction('')
  };
  //backend process
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailchange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (isLogin) {
      const user = { username, password };
      console.log('User:', user);
    }
    else {
      const newuser = { username, email, password };
      console.log('newUser:', newuser);
    }


    // Process user login (e.g., send user data to the backend)


  };
  const [message, setMessage] = useState('');
  const validateForm = () => {
    if (!username || !password || (!isLogin && !email)) {
      setMessage('All fields are required.');
      return false;
    }
    if (password.length < 6) {
      setMessage('Password must be at least 6 characters long.');
      return false;
    }
    return true;
  };

  const switchToLogin = () => setIsLogin(true);
  const switchToRegister = () => setIsLogin(false);


  return (




    <div className={`wrapper${action}`}>
      <div className="form-box login">
        <form action="" onSubmit={handleSubmit}>

          <h1>Login</h1>

          <div className="input-box">
            <FaUser className='icon' /><input type="text" name='username' placeholder='Username' required onChange={handleUsernameChange} />
          </div>

          <div className="input-box">
            <FaLock className='icon' /> < input type="password" placeholder='Password' required onChange={handlePasswordChange} />
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me!</label>
            <a href="#">Forgot password?</a>
          </div>
          <button type='submit' onClick={switchToLogin}>Login</button>

          <div className="register-link">
            <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a>
            </p>
          </div>
        </form>
        {message}
      </div>




      <div className="form-box register">
        <form action="" onSubmit={handleSubmit}>

          <h1>Registration</h1>

          <div className="input-box">
            <FaUser className='icon' /><input type="text" placeholder='Username' required value={username} onChange={handleUsernameChange} />
          </div>

          <div className="input-box">
            <FaEnvelope className='icon' /><input type="email" placeholder='Email' required value={email} onChange={handleEmailchange} />
          </div>

          <div className="input-box">
            <FaLock className='icon' /> < input type="password" placeholder='Password' required value={password} onChange={handlePasswordChange} />
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" required />I agree to the terms & conditions</label>
          </div>
          <button type='submit' onClick={switchToRegister}>Register</button>

          <div className="register-link">
            <p>Already have an account?
              <a href="#" onClick={loginLink}>Login</a>
            </p>
          </div>

        </form>

      </div>
    </div>


  )
}
export default LoginRegister