import './ArtistRectangleCard.css'
import RectangleContent from '../GlobalComponents/RectangleContent/RectangleContent'
import CardImgUser from '../GlobalComponents/AllCards/CardImgUser/CardImgUser';
import UserName from '../GlobalComponents/AllTexts/UserName/UserName';
import IconVerify from '../GlobalComponents/IconBtn/IconVerify/IconVerify';
function ArtistRectangleCard() {
  return (
    <>
    <RectangleContent titulo={"ARTISTAS RECOMENDADOS"} width={'300px'} height={'309px'} colorFondo={'#221e1f'}>
    <div className='div-content-artiscard-img-user'>
      <CardImgUser size='46px'  imgUserurl={"/rectangle-112@2x.png"}/>
      <div className='div-content-artiscard-user-verify'>
      <UserName fontsize='18px' fontWeight={300} userName='Angel'></UserName>
      <IconVerify size='20px'></IconVerify>
      </div>
      </div>
      <div className='div-content-artiscard-img-user'>
      <CardImgUser  size='46px'imgUserurl={"/rectangle-117@2x.png"}/>
      <div className='div-content-artiscard-user-verify'>
      <UserName fontsize='18px' fontWeight={300} userName='Franco'></UserName>
      </div>
      </div>
      <div className='div-content-artiscard-img-user'>
      <CardImgUser  size='46px'imgUserurl={"/img/NFTs/IMG-20231218-WA0026.jpg"}/>
      <div className='div-content-artiscard-user-verify'>
      <UserName fontsize='18px' fontWeight={300} userName='Leon'></UserName>
      </div>
      </div>
      <div className='div-content-artiscard-img-user'>
      <CardImgUser  size='46px'imgUserurl={"/img/NFTs/IMG-20231218-WA0029.jpg"}/>
      <div className='div-content-artiscard-user-verify'>
      <UserName fontsize='18px' fontWeight={300} userName='Clark'></UserName>
      </div>
      </div>
    
  
      </RectangleContent>
    </>
  );
}

export default ArtistRectangleCard;
