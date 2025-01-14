import '../styles/SelectAnimalButton.css';
import React from "react";

const SelectAnimalButton = ({image, altText}) => {
  const handleClick = () => {
    console.log(`Selected ${image}`);
  }
  return (
    <button
      className="button"
      onClick={handleClick}
    >
      <img className="button-image" src={image} alt={altText} />
    </button>
  );
};

export default SelectAnimalButton;