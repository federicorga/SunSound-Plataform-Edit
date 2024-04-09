import './ReleasesArtis.css'
import RectangleContent from '../../../GlobalComponents/RectangleContent/RectangleContent';
import LatestReleasesArtist from '../../../LatestReleasesArtist/LatestReleasesArtist';
import CardImgMusic from '../../../GlobalComponents/AllCards/CardImgMusic/CardImgMusic';
import MusicCarPlayerComponent from '../../../GlobalComponents/MusicAllComponents/MusicCardPlayerComponent/MusicCarPlayerComponent';

function ReleasesArtis({funcionActiveCard}) {

  return (
    <section className="SectionB-A">
            <RectangleContent>
            <LatestReleasesArtist></LatestReleasesArtist>
            </RectangleContent>
          
            <RectangleContent
              titulo={"Latest releases"}
              width={"100%"}
              height={"60%"}
            >
              <div className="plataform-content-cardmusic">
                <div className='button-add-music-releasesArtis' onClick={funcionActiveCard}>
                  <CardImgMusic
                    size={"214px"}
                    imgSrc={"/Masimg.png"}
                  ></CardImgMusic>
                </div>
                <MusicCarPlayerComponent
                  size={"214px"}
                  imgSrc={"/img/NFTs/IMG-20231218-WA0029.jpg"}
                  tileSubActive={true}
                ></MusicCarPlayerComponent>
                <MusicCarPlayerComponent
                  size={"214px"}
                  imgSrc={"/img/NFTs/IMG-20231218-WA0022.jpg"}
                  tileSubActive={true}
                ></MusicCarPlayerComponent>
                <MusicCarPlayerComponent
                  size={"214px"}
                  imgSrc={"/rectangle-67@2x.png"}
                  tileSubActive={true}
                ></MusicCarPlayerComponent>
                <MusicCarPlayerComponent index={1}
                  size={"214px"}
                  imgSrc={"/rectangle-117@2x.png"}
                  tileSubActive={true}
                  titleTheme={"En el patio (Original Mix)"}
                  subitileTheme={"Arakaki"}
                ></MusicCarPlayerComponent>
                
                <MusicCarPlayerComponent index={3}
                  size={"214px"}
                  imgSrc={"/rectangle-119@2x.png"}
                  tileSubActive={true}
                  titleTheme={"Coda"}
                  subitileTheme={"Taylorythm"}
                ></MusicCarPlayerComponent>
               
              </div>
            </RectangleContent>
          </section>
  );
}

export default ReleasesArtis;
