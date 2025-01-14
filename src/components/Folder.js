import '../styles/Folder.css';
import ImageWindow from './ImageWindow';

function Folder() {
  return (
    <div className="container">
      <div className="folder_tab"></div>
      <div className="folder">
        <ImageWindow />
      </div>
    </div>
  );
};

export default Folder;