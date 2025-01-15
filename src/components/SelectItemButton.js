import '../styles/SelectItemButton.css';
import React from 'react';

const SelectItemButton = ({ image, altText, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <img className="button-image" src={image} alt={altText} />
    </button>
  );
};

export default SelectItemButton;
