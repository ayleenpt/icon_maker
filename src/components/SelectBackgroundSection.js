import SelectItemButton from "./SelectItemButton";
import Styles from '../styles/Styles.module.css';
import Blue from '../assets/backgrounds/Blue.png';
import Green from '../assets/backgrounds/Green.png';
import Purple from '../assets/backgrounds/Purple.png';
import Yellow from '../assets/backgrounds/Yellow.png';

function SelectBackgroundSection({ onSelection }) {
  const backgroundStyle = {
    borderRadius: '50%',
    objectFit: 'cover'
  };

  return (
    <div className={Styles.buttons}>
      <SelectItemButton image={Blue} altText={"Blue"} onClick={() => onSelection(Blue)} style={backgroundStyle} />
      <SelectItemButton image={Green} altText={"Green"} onClick={() => onSelection(Green)}  style={backgroundStyle} />
      <SelectItemButton image={Purple} altText={"Purple"} onClick={() => onSelection(Purple)}  style={backgroundStyle} />
      <SelectItemButton image={Yellow} altText={"Yellow"} onClick={() => onSelection(Yellow)}  style={backgroundStyle} />
    </div>
  );
}

export default SelectBackgroundSection;
