import React, { useMemo} from 'react';
import IconHeartLike from '../../IconBtn/IconHeartLike/IconHeartLike';
import MusicCarPlayerComponent from '../../MusicAllComponents/MusicCardPlayerComponent/MusicCarPlayerComponent';

import './CardMusicTheme.css';


function CardMusicTheme({ sizeCardMusic, imgSrc, titleTheme ='unknown',titleArtist='unknown',showHeartButton = true, index }) {


  return (
    <>
      <MusicCarPlayerComponent sizeButtons='30px' size={sizeCardMusic} imgSrc={imgSrc} index={index}/>
      <div className='content-title-heart-musicplayer'>
          <div className='content-title-subititle-musicplayer'>
            <h2 className='name-teme-song-musicplayer'>{titleTheme}</h2>
            {titleArtist !== "" && (
        <h3 className='name-artista-song-musicplayer'>{titleArtist}</h3>
      )}
          </div>

          {showHeartButton && (
          <div className='content-heart-button'>
            <button className='butons-heart-musicplayer'>
              <IconHeartLike />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CardMusicTheme;
