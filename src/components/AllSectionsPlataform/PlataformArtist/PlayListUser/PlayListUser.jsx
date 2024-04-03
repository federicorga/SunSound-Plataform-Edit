import './PlayListUser.css'
import RectangleContent from '../../../GlobalComponents/RectangleContent/RectangleContent';
import ButtonA from '../../../GlobalComponents/AllButtons/ButtonA/ButtonA';

function PlayListUser() {
  return (
    <section>
    <RectangleContent titulo={"Playlists"}>
        <div className='content-buttons-playlistUser'><ButtonA text={"All"} width={"45px"} colorButton={"black"}/>
        <ButtonA text={"Created"} width={"90px"} colorButton={"black"}/></div>
        <div className='UserNot-PlayList-box'>
            <img src="/img/playlist/play-list-element-img-341412-wh.png" alt="" />
            <h2 className='text-playlist-userNot'>The user doesn't have playlists yet.</h2>
        </div>
        </RectangleContent>
    </section>
  );
}

export default PlayListUser;
