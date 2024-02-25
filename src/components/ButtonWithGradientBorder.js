import React from 'react';
import "../assets/styles/About.css";
import "../assets/styles/Global.css";

const ButtonWithGradientBorder = ({ link, text }) => {
  return (
    <div className="rainbowBorderWrapper">
      <a
        className="profile-web-link"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {text}
        <svg
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </a>
    </div>
  );
};

export default ButtonWithGradientBorder;
