import './CardImgUser.css'
import { useMemo } from 'react';

function CardImgUser({imgUserurl ,size="40px"}) {
    const imgStyle = useMemo(() => {
        return {
          width: size,
          height: size,
        };
      }, [size]);
    
  return (
    
    <>
    <div className='card-img-user-content'  style={imgStyle}>
      <img src={imgUserurl} alt="usercard" />
    </div>
    </>
  );
}

export default CardImgUser;
