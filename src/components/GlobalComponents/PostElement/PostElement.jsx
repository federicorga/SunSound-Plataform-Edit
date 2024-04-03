import "./PostElement.css";
import CardImgUser from "../AllCards/CardImgUser/CardImgUser";
import UserName from "../AllTexts/UserName/UserName";
import IconVerify from "../IconBtn/IconVerify/IconVerify";
import NavButtonsSocialPost from "../NavButtonsSocialPost/NavButtonsSocialPost";
import BoxMusicContentPost from '../BoxMusicContentPost/BoxMusicContentPost';


function PostElement() {
  return (
    <div className="PostElement-contentallPost">
      <div className="card-user-postElement">
        <CardImgUser
          size="50px"
          imgUserurl={"/rectangle-112@2x.png"}
        ></CardImgUser>
      </div>
      <section className="section-info-text-music-red-all-PostElement">
      <div className="content-user-verif-textinfomusic">
          <div className="username-verf-PostElement">
            <UserName userName="ANGEL" fontsize="1rem"></UserName>
            <IconVerify size={"20px"}></IconVerify>
          </div>
        <div className="text-infomusic-PostElement">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          molestias quod reiciendis, consequatur recusandae, labore quibusdam
          corporis impedit tenetur autem consectetur aperiam qui, eos obcaecati
          voluptatibus sed cum dolorem ipsam.
          </p>
        </div>
      </div>
      <div><BoxMusicContentPost></BoxMusicContentPost></div>
      <div><NavButtonsSocialPost></NavButtonsSocialPost></div>
      </section>
    </div>
  );
}

export default PostElement;
