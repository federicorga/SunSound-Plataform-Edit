import IconAddMusicList from '../IconBtn/IconAddMusicList/IconAddMusicList';
import './DropDownList.css'

function DropDownList() {
  return (


    <div className="dropdown-popper">
      <div className="j_Ltn gU4lg">
        <div className="IBRGd">
          <ul className='ul-dropdownlist'>
            <li className='li-dropdownlist'>
              <button className="KUMiD" type="button">
                <span className="APyTE">
                  <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-c1x3e4" data-testid="PlayBeforeIcon">
                    <path fillRule="evenodd" d="M3 10c0-1.1.9-2 2-2h4.96c-.59.75-1.11 1.37-1.81 2.18-.27.31-.39.44-.56.62l-.42.45 1.65 1.51.4-.42c.18-.19.33-.35.62-.69 1.03-1.18 1.69-2 2.72-3.36.56-.73.56-1.84 0-2.58-1.04-1.36-1.7-2.17-2.72-3.36-.21-.238-.341-.382-.463-.516a51.937 51.937 0 0 1-.157-.174l-.4-.42-1.65 1.51.42.45c.17.18.29.31.56.62.7.81 1.21 1.43 1.81 2.18H5c-2.21 0-4 1.79-4 4v4h2v-4Zm20-4h-8v2h8V6Zm-8 5h8v2h-8v-2Zm8 5H1v2h22v-2ZM1 21h22v2H1v-2Z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span className="_G9BW">Escuchar a continuación </span>
              </button>
            </li>
            <li className='li-dropdownlist'>
              <button className="KUMiD" type="button">
                <span className="APyTE">
                <IconAddMusicList></IconAddMusicList>
                </span>
                <span className="_G9BW">Agregar a la cola</span>
              </button>
            </li>
            {/* Agrega el resto de los botones aquí */}
          </ul>
        </div>
        <div className="aC0hD">
          {/* Agrega el contenido del siguiente panel aquí */}
        </div>
      </div>
    </div>
  );
}


export default DropDownList;
