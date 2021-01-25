import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Home.module.scss';
import menu from '../../images/menu.svg';
import userAddressCard from '../../images/userAddressCard.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <div className={Style.headerInner}>
          <nav>
            <ul>
              <li>
                <Link to="/">{`<`}</Link>
              </li>
              <li>Attendance</li>
              <li>
                <Link to="/login">
                  <img src={menu} alt="menu" />
                </Link>
              </li>
            </ul>
          </nav>
          <div className={Style.headerCardContainer}>
            <div className={Style.headerCard}>
              <div className={Style.headerCardInner}>
                <div className={Style.photo}></div>
                <div className={Style.profileInfoContainer}>
                  <div className={Style.name}>Scheduled: 20</div>
                  <div className={Style.status}>Checked in</div>
                </div>
              </div>
            </div>
            <div className={Style.headerCard}>
              <div className={Style.headerCardInner}>
                <div className={Style.photo}></div>
                <div className={Style.profileInfoContainer}>
                  <div className={Style.name}>Scheduled: 20</div>
                  <div className={Style.status}>Checked in</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header */}
      {/* mainContainer */}
      <div className={Style.mainContainer}>
        <div className={Style.searchInput}>
          <input
            placeholder="search"
            id="user-name"
            className={Style.textInput}
          />
        </div>
        <div className={Style.buttonContainer}>
          <Button
            borderColor="#6693B5"
            backgroundColor="#6693B5"
            color="#fff"
            text="Scheduled Children"
            path="/"
            width="49%"
          />
          <Button
            borderColor="#6693B5"
            backgroundColor="#fff"
            color="#6693B5"
            text="Other Children"
            path="/"
            width="49%"
          />
        </div>

        <div className={Style.userContainer}>
          <div className={Style.userContainerLeft}>
            <div className={Style.userPhoto}></div>
            <div className={Style.userName}>Name</div>
          </div>
          <div className={Style.userContainerRight}>
            <Button
              borderColor="#6693B5"
              backgroundColor="#6693B5"
              color="#fff"
              text="Check in"
              path="/"
              width="80px"
            />
            <div>
              <img src={userAddressCard} alt="address-card" />
            </div>
          </div>
        </div>
      </div>
      {/* mainContainer */}
    </div>
  );
};

export default Home;
