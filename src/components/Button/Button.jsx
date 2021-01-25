import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Button.module.scss';

const Button = ({ borderColor, backgroundColor, color, text, path, width }) => {
  return (
    <div
      className={Style.buttonContainer}
      style={{
        border: `1px solid ${borderColor}`,
        backgroundColor: `${backgroundColor}`,
        width: `${width}`,
      }}
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
