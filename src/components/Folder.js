import '../styles/Folder.css';
import ImageWindow from './ImageWindow';
import Options from './Options';

function Folder() {
  return (
    <div className="container">
      <div className="folder_tab"></div>
      <div className="folder">
        <ImageWindow />
        <Options />
      </div>
    </div>
  );
};

export default Folder;