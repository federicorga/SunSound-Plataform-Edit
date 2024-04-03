import './MusicCarPlayerComponent.css';
import CardImgMusic from "../../AllCards/CardImgMusic/CardImgMusic";
import IconPlayCardInternal from "../../IconBtn/IconPlayCardInternal/IconPlayCardInternal";
import IconPauseCardInternal from "../../IconBtn/IconPauseCardInternal/IconPauseCardInternal";
import { usePlayerContext } from '../../../providers/PlayerProvider';
import { useMemo } from 'react';
import IconPlayingAnime from '../../IconBtn/IconPlayingAnime/IconPlayingAnime';

function MusicCarPlayerComponent({ size, sizeButtons='50px', imgSrc, index,titleTheme="unknown",subitileTheme="unknown",tileSubActive=false }) {
  const { selectSong, currentSongIndex, isPlaying, handlePlayPause,handlePlay } = usePlayerContext();

const buttonStyle=useMemo(()=>{
  return{
  whidt:`${sizeButtons}`,
  height:`${sizeButtons}`
}
},[sizeButtons]);

  const cardStyle = useMemo(() => {
    return {
      backgroundColor:"black",
      borderRadius:" var(--br-6xl)",
        };
  }, [tileSubActive]);
  const handleSongClick = () => {
    if(index){
    if (index !== currentSongIndex || !isPlaying) {
      selectSong(index);
      handlePlay();
    } else {
      handlePlayPause();
    }
  }
  };

  return (
    <section className='content-all-playerMusicCardComponent' style={tileSubActive?cardStyle:null}>
    <button className='button-playerMusicCardComponent' onClick={handleSongClick}>
      <div className='content-buttonsandimgcardmusicplayercomponent'>
        <div className={index === currentSongIndex && isPlaying ?('buttonplaypause-cardmusic buttonplaypause-cardmusicactive'):('buttonplaypause-cardmusic')}>
          <div style={buttonStyle} className={index === currentSongIndex && isPlaying ?('intern-buttonplaypause-cardmusicactive'):('intern-buttonplaypause-cardmusic')}>
            {index === currentSongIndex && isPlaying ? (
              <IconPlayingAnime/>
             
            ) : (
              <IconPlayCardInternal />
            )}
          </div>
        </div>
        <CardImgMusic size={size} imgSrc={imgSrc} />
      </div>
    </button>
{tileSubActive &&
    <div className='content-title-subittle-musiccardPlayercomponent'>
      <div className='title-subittle-musiccardPlayercomponent'>
    <h2 className='title-musicplayercardcomponent'>{titleTheme}</h2>
    <h3 className='subtitle-musicplayercardcomponent'>{subitileTheme}</h3>
    </div>
    </div>}

    </section>
  );
}

export default MusicCarPlayerComponent;
