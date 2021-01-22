import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Login.module.scss';
import menu from '../../images/menu.svg';
import profile from '../../images/profile.jpg';

const Login = () => {
  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <div className={Style.headerInner}>
          <nav>
            <ul>
              <li>
                <Link to="/">{`<`}</Link>
              </li>
              <li>Teacher Profile</li>
              <li>
                <Link to="/login">
                  <img src={menu} alt="menu" />
                </Link>
              </li>
            </ul>
          </nav>
          <div className={Style.profile}>
            <img src={profile} alt="profile" />
          </div>
          <p className={Style.name}>Teacher Name</p>
          <div className={Style.updateButtonContainer}>
            <Link to="/login" className={Style.updateButton}>
              Update Profile Photo
            </Link>
          </div>
        </div>
      </div>
      <div className={Style.cardListContainer}>
        <div className={Style.card}>
          <div className={Style.contactInfo}>Contact Information</div>
          <div className={Style.contactItem}>Phone Number</div>
          <div className={Style.contactItem}>Email</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
