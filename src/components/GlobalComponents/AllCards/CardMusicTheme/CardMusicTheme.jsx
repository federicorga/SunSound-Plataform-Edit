import React, { useMemo} from 'react';
import IconHeartLike from '../../IconBtn/IconHeartLike/IconHeartLike';
import CardImgMusic from '../CardImgMusic/CardImgMusic';
import './CardMusicTheme.css';


function CardMusicTheme({ sizeCardMusic, imgSrc, titleTheme ='unknown',titleArtist='unknown',showHeartButton = true }) {


  return (
    <>
      <CardImgMusic size={sizeCardMusic} imgSrc={imgSrc}></CardImgMusic>
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
