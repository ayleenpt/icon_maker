import '../styles/ExportButton.css';

const Button = ({onClick, text}) => { 
  return (
    <button
      className="export-button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;