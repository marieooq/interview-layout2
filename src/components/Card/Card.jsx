import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons';
import Style from './Card.module.scss';

const Card = () => {
  return (
    <div className={Style.cardListContainer}>
      <div className={Style.card}>
        <div className={Style.contactInfo}>Contact Information</div>
        <div className={Style.contactItem}>
          <FontAwesomeIcon icon={faPhoneAlt} className={Style.phone} />
          Phone Number
        </div>
        <div className={Style.contactItem}>
          <FontAwesomeIcon icon={faEnvelopeSquare} className={Style.envelope} />
          Email
        </div>
      </div>
    </div>
  );
};

export default Card;
