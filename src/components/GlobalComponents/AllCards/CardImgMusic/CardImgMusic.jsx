import React, { useMemo} from 'react';
import './CardImgMusic.css';


function CardImgMusic({ size, imgSrc }) {
  const imgStyle = useMemo(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  return (
    <>
    <div className='div-card-img-music' style={imgStyle}>
      <img  alt="" src={imgSrc} ></img>
      </div>
 
    </>
  );
}

export default CardImgMusic;
