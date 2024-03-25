import RectangleContent from '../../../GlobalComponents/RectangleContent/RectangleContent';
import LatestReleasesArtist from '../../../LatestReleasesArtist/LatestReleasesArtist';
import CardImgMusic from '../../../GlobalComponents/AllCards/CardImgMusic/CardImgMusic';

function ReleasesArtis({funcionActiveCard}) {

  return (
    <section className="SectionB-A">
            <RectangleContent>
            <LatestReleasesArtist></LatestReleasesArtist>
            </RectangleContent>
          
            <RectangleContent
              titulo={"ÚLTIMOS LANZAMIENTOS"}
              width={"100%"}
              height={"60%"}
            >
              <div className="plataform-content-cardmusic">
                <div onClick={funcionActiveCard}>
                  <CardImgMusic
                    size={"214px"}
                    imgSrc={"/Masimg.png"}
                  ></CardImgMusic>
                </div>
                <CardImgMusic
                  size={"214px"}
                  imgSrc={"/img/NFTs/IMG-20231218-WA0029.jpg"}
                ></CardImgMusic>
                <CardImgMusic
                  size={"214px"}
                  imgSrc={"/img/NFTs/IMG-20231218-WA0022.jpg"}
                ></CardImgMusic>
                <CardImgMusic
                  size={"214px"}
                  imgSrc={"/rectangle-67@2x.png"}
                ></CardImgMusic>
                <CardImgMusic
                  size={"214px"}
                  imgSrc={"/rectangle-117@2x.png"}
                ></CardImgMusic>
                <CardImgMusic
                  size={"214px"}
                  imgSrc={"/rectangle-119@2x.png"}
                ></CardImgMusic>
              </div>
            </RectangleContent>
          </section>
  );
}

export default ReleasesArtis;
