import React, { useState } from 'react';
import './PlataformArtist.css'
import UserTitlePlataform from '../../UserTitlePlataform/UserTitlePlataform';
import ArtistRectangleCard from '../../ArtistRectangleCard/ArtistRectangleCard'
import NFTRectangleCard from '../../NFTRectangleCard/NFTRectangleCard';
import CardImgMusic from '../../GlobalComponents/AllCards/CardImgMusic/CardImgMusic';
import RectangleContent from '../../GlobalComponents/RectangleContent/RectangleContent';
import LoadingMusicForm from '../../LoadingMusicForm/LoadingMusicForm';

import BalanceTotalCard from '../../BalanceTotalCard/BalanceTotalCard';


function PlataformArtist() {

    const [showForm, setShowForm] = useState(false);

    const CardAddMusicClickActive = () => {
      setShowForm(true); // Al hacer clic en el CardImgMusic, muestra el formulario
      console.log(showForm)
    };
    const CardAddMusicClickClose = () => {
      setShowForm(false); // Cierra el formulario al hacer clic en el botón de cierre
    };
  return (
    <>

    <section className='SectionA'>
    <div className='nav-plataform'>
        
    <div className='plataform-usertitleplataform-content'>
            <UserTitlePlataform></UserTitlePlataform>
        </div>  
    </div>
    </section>
    <section className='SectionB'>
   
        <section className='SectionB-A'>

            <RectangleContent titulo={'TUS ÚLTIMOS LANZAMIENTOS'}   width={'100%'} height={'60%'} >
            <div className='plataform-content-cardmusic'>
            <div onClick={CardAddMusicClickActive}>
            <CardImgMusic size={'214px'} imgSrc={'Masimg.png'}></CardImgMusic>
            </div>
            <CardImgMusic size={'214px'} imgSrc={'img/NFTs/IMG-20231218-WA0029.jpg'}></CardImgMusic>
            <CardImgMusic size={'214px'} imgSrc={'img/NFTs/IMG-20231218-WA0022.jpg'}></CardImgMusic>
            <CardImgMusic size={'214px'} imgSrc={'rectangle-67@2x.png'}></CardImgMusic>
            <CardImgMusic size={'214px'} imgSrc={'rectangle-117@2x.png'}></CardImgMusic>
            <CardImgMusic size={'214px'} imgSrc={'rectangle-119@2x.png'}></CardImgMusic>
            </div>
            </RectangleContent>
        </section>
            <section className='SectionB-B'>
            <div>
                <BalanceTotalCard></BalanceTotalCard>
            </div>    
            <div>
            <ArtistRectangleCard></ArtistRectangleCard>
            </div>
            <div>
            <NFTRectangleCard></NFTRectangleCard>
            </div>
            </section>
            
    </section>
    
    {showForm && <div className='content-form-loadingMusic-inPlataform'><LoadingMusicForm onCloseForm={CardAddMusicClickClose}/></div>}
    </>
  );
}

export default PlataformArtist;
