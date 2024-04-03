import './SectionInicioPlataform.css'
import CarrouselGeneral from "../../GlobalComponents/CarrouselGeneral/CarrouselGeneral";
import MusicCarPlayerComponent from '../../GlobalComponents/MusicAllComponents/MusicCardPlayerComponent/MusicCarPlayerComponent';

import CardImgUser from '../../GlobalComponents/AllCards/CardImgUser/CardImgUser';

function SectionInicioPlataform() {
  return (
    <section className="content-section-home-plataform">

       
        <CarrouselGeneral titleCarrousel="Playlists que amarás" items={[
           <MusicCarPlayerComponent
           size={"214px"}
           imgSrc={"/img/NFTs/IMG-20231218-WA0029.jpg"}
           tileSubActive={true}
         ></MusicCarPlayerComponent>,
         <MusicCarPlayerComponent
           size={"214px"}
           imgSrc={"/img/NFTs/IMG-20231218-WA0022.jpg"}
           tileSubActive={true}
         ></MusicCarPlayerComponent>,
         <MusicCarPlayerComponent
           size={"214px"}
           imgSrc={"/rectangle-67@2x.png"}
           tileSubActive={true}
         ></MusicCarPlayerComponent>,
         <MusicCarPlayerComponent index={1}
           size={"214px"}
           imgSrc={"/rectangle-117@2x.png"}
           tileSubActive={true}
           titleTheme={"En el patio (Original Mix)"}
           subitileTheme={"Arakaki"}
         ></MusicCarPlayerComponent>,
         
         <MusicCarPlayerComponent index={3}
           size={"214px"}
           imgSrc={"rectangle-119@2x.png"}
           tileSubActive={true}
           titleTheme={"Coda"}
           subitileTheme={"Taylorythm"}
         ></MusicCarPlayerComponent>, <MusicCarPlayerComponent
         size={"214px"}
         imgSrc={"/img/NFTs/IMG-20231218-WA0029.jpg"}
         tileSubActive={true}
       ></MusicCarPlayerComponent>,
       <MusicCarPlayerComponent
         size={"214px"}
         imgSrc={"/img/NFTs/IMG-20231218-WA0022.jpg"}
         tileSubActive={true}
       ></MusicCarPlayerComponent>,
       <MusicCarPlayerComponent
         size={"214px"}
         imgSrc={"/rectangle-67@2x.png"}
         tileSubActive={true}
       ></MusicCarPlayerComponent>,
       <MusicCarPlayerComponent index={1}
         size={"214px"}
         imgSrc={"/rectangle-117@2x.png"}
         tileSubActive={true}
         titleTheme={"En el patio (Original Mix)"}
         subitileTheme={"Arakaki"}
       ></MusicCarPlayerComponent>,
       
       <MusicCarPlayerComponent index={3}
         size={"214px"}
         imgSrc={"rectangle-119@2x.png"}
         tileSubActive={true}
         titleTheme={"Coda"}
         subitileTheme={"Taylorythm"}
       ></MusicCarPlayerComponent>,
         
        ]}>

        </CarrouselGeneral>

        <CarrouselGeneral titleCarrousel='Artistas' items={[
              <CardImgUser size='200px' imgUserurl={"/rectangle-112@2x.png"}></CardImgUser>,
              <CardImgUser size='200px' imgUserurl={"/img/NFTs/IMG-20231218-WA0026.jpg"}></CardImgUser>,
              <CardImgUser size='200px' imgUserurl={"/img/NFTs/IMG-20231218-WA0021.jpg"}></CardImgUser>,
              <CardImgUser size='200px' imgUserurl={"/img/NFTs/IMG-20231218-WA0020.jpg"}></CardImgUser>,
              <CardImgUser size='200px' imgUserurl={"/img/NFTs/IMG-20231218-WA0019.jpg"}></CardImgUser>,
              <CardImgUser size='200px' imgUserurl={"/rectangle-112@2x.png"}></CardImgUser>,
              <CardImgUser size='200px' imgUserurl={"/img/NFTs/IMG-20231218-WA0026.jpg"}></CardImgUser>,
              <CardImgUser size='200px' imgUserurl={"/img/NFTs/IMG-20231218-WA0021.jpg"}></CardImgUser>,
              <CardImgUser size='200px' imgUserurl={"/img/NFTs/IMG-20231218-WA0020.jpg"}></CardImgUser>,
              <CardImgUser size='200px' imgUserurl={"/img/NFTs/IMG-20231218-WA0019.jpg"}></CardImgUser>,
        ]}>

        </CarrouselGeneral>


        
      
    </section>
  );
}

export default SectionInicioPlataform;
