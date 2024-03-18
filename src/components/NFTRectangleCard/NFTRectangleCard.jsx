import './NFTRectangleCard.css'
import RectangleContent from '../GlobalComponents/RectangleContent/RectangleContent'
import CardImgMusic from '../GlobalComponents/AllCards/CardImgMusic/CardImgMusic';
function NFTRectangleCard() {
  return (
    <>
      <RectangleContent titulo={"Tus NFTs"} width={"330px"} height={"447px"} colorFondo={'#221e1f'}>
    <section className='nft-card-content-cardmusic'>    
    <CardImgMusic size={'75px'} imgSrc={'img/NFTs/IMG-20231218-WA0019.jpg'}></CardImgMusic>
    <CardImgMusic size={'75px'} imgSrc={'img/NFTs/IMG-20231218-WA0020.jpg'}></CardImgMusic>
    <CardImgMusic size={'75px'} imgSrc={'img/NFTs/IMG-20231218-WA0021.jpg'}></CardImgMusic>
    <CardImgMusic size={'75px'} imgSrc={'img/NFTs/IMG-20231218-WA0022.jpg'}></CardImgMusic>
    <CardImgMusic size={'75px'} imgSrc={'img/NFTs/IMG-20231218-WA0023.jpg'}></CardImgMusic>
    <CardImgMusic size={'75px'} imgSrc={'img/NFTs/IMG-20231218-WA0024.jpg'}></CardImgMusic>
    <CardImgMusic size={'75px'} imgSrc={'img/NFTs/IMG-20231218-WA0025.jpg'}></CardImgMusic>
    <CardImgMusic size={'75px'} imgSrc={'img/NFTs/IMG-20231218-WA0026.jpg'}></CardImgMusic>
    <CardImgMusic size={'75px'} imgSrc={'img/NFTs/IMG-20231218-WA0027.jpg'}></CardImgMusic>
    <CardImgMusic size={'75px'} imgSrc={'img/NFTs/IMG-20231218-WA0029.jpg'}></CardImgMusic>
    <CardImgMusic size={'75px'} imgSrc={'rectangle-115@2x.png'}></CardImgMusic>
    <CardImgMusic size={'75px'} imgSrc={'rectangle-119@2x.png'}></CardImgMusic>
    </section>
      </RectangleContent>
    </>
  );
}

export default NFTRectangleCard;
