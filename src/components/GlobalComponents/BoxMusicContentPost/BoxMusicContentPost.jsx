import "./BoxMusicContentPost.css";
import CardImgMusic from "../AllCards/CardImgMusic/CardImgMusic";
import ButtonA from "../AllButtons/ButtonA/ButtonA";
import IconPlayCardInternal from "../IconBtn/IconPlayCardInternal/IconPlayCardInternal";

function BoxMusicContentPost() {
  return (
    <section className="section-elementall-BoxMusicContentPost">
      <div className="content-imgcardMusic-titlesong-nameArtist-BoxMusicContentPost">
        <div>
          <CardImgMusic
            size={"150px"}
            imgSrc={"/rectangle-115@2x.png"}
          ></CardImgMusic>
        </div>
        <div className="content-titles-and-buttons-BoxMusicContentPost">
          <div className="div-title-artistname-boxMusicContentPost">
            <h2 className="title-song-boxMusicContentPost">Open Your Eyes</h2>
            <h3 className="nameArtist-song-boxMusicContentPost">Steve Angello & Alex Metric</h3>
          </div>
          <div className="content-buttons-colect-playmusic-BoxMusicContentPost">
            <div className="buttonColect-BoxMusicContentPost">
              <ButtonA text={"Collect"}></ButtonA>
            </div>
            <div className="buttonPlay-BoxMusicContentPost">
              <IconPlayCardInternal></IconPlayCardInternal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoxMusicContentPost;
