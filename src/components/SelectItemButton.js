import '../styles/SelectItemButton.css';
import React from 'react';

const SelectItemButton = ({ image, altText, onClick, style }) => {
  return (
    <button
      className="button"
      onClick={onClick}
    >
      <img
        className="button-image"
        src={image}
        alt={altText}
        style={style}
      />
    </button>
  );
};

export default SelectItemButton;
