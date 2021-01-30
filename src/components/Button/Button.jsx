import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Button.module.scss';

const Button = ({
  borderColor,
  buttonBackgroundColor,
  setButtonBackgroundColor,
  color,
  text,
  path,
  width,
  status,
  setStatus,
}) => {
  const handleChange = (e) => {
    e.preventDefault();
    text === 'Scheduled Children'
      ? setStatus('Check in')
      : setStatus('Drop in');

    // buttonBackgroundColor === '#6693B5'
    //   ? setButtonBackgroundColor('#fff')
    //   : setButtonBackgroundColor('#669B5');

    if (buttonBackgroundColor === '#6693B5') {
      console.log('buttonBackgroundColor', buttonBackgroundColor);
      setButtonBackgroundColor('#fff');
    } else {
      setButtonBackgroundColor('#6693B5');
      console.log('buttonBackgroundColor', buttonBackgroundColor);
    }
  };

  return (
    <div
      className={Style.buttonContainer}
      style={{
        border: `1px solid ${borderColor}`,
        backgroundColor: `${buttonBackgroundColor}`,
        width: `${width}`,
      }}
      onClick={handleChange}
    >
      <Link
        to={path}
        className={Style.buttonLink}
        style={{ color: `${color}` }}
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
