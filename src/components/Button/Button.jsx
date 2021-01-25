import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Style from './Button.module.scss';

const Button = ({
  borderColor,
  backgroundColor,
  color,
  text,
  path,
  width,
  status,
  setStatus,
}) => {
  // const [status, setStatus] = useState('scheduled');

  const handleChange = (e) => {
    // setStatus(e.target.value);
    e.preventDefault();
    status === 'scheduled' ? setStatus('other') : setStatus('scheduled');
  };

  return (
    <div
      className={Style.buttonContainer}
      style={{
        border: `1px solid ${borderColor}`,
        backgroundColor: `${backgroundColor}`,
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
