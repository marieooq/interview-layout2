import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Home.module.scss';
import logo from '../../images/logo.png';

const Home = () => {
  return (
    <div className={Style.container}>
      <div className={Style.hero}></div>
      <div className={Style.inner}>
        <div className={Style.logo}>
          <img src={logo} alt="logo" />
        </div>
        <p className={Style.catch}>Teacher Portal Login</p>
        <div className={Style.form}>
          <div>
            <input
              placeholder="Username"
              id="user-name"
              className={Style.textInput}
            />
          </div>
          <div>
            <input
              placeholder="Password"
              id="password"
              className={Style.textInput}
            />
          </div>
          <div className={Style.radioLinkContainer}>
            <div className={Style.checkboxContainer}>
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <div className={Style.forgotPasswordContainer}>
              <Link>Forgot Password</Link>
            </div>
          </div>
          <div className={Style.loginContainer}>
            <Link to={'/login'} className={Style.loginButton}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
