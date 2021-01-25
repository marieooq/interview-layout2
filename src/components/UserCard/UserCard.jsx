import React from 'react';
import Button from '../Button/Button';
import Style from './UserCard.module.scss';
import userAddressCard from '../../images/userAddressCard.svg';

const UserCard = ({ text }) => {
  return (
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
          text={text}
          path="/"
          width="80px"
        />
        <div>
          <img src={userAddressCard} alt="address-card" />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
