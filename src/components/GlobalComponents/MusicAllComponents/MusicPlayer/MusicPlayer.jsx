import React, { useState, useRef, useEffect } from 'react';
import IconArrowReload from '../../IconBtn/IconsButtonPlayer/IconArrowReload';
import IconPause from '../../IconBtn/IconsButtonPlayer/IconPause';
import IconPlay from '../../IconBtn/IconsButtonPlayer/IconPlay';
import IconPlayBack from '../../IconBtn/IconsButtonPlayer/IconPlayBack';
import IconPlayForward from '../../IconBtn/IconsButtonPlayer/IconPlayForward';
import IconRandom from '../../IconBtn/IconsButtonPlayer/IconMixed'; // Importa el icono para reproducción aleatoria
import './MusicPlayer.css';
import CardMusicTheme from '../../AllCards/CardMusicTheme/CardMusicTheme';
import SliderVolumen from '../SliderVolumen/SliderVolumen';
import ButtonA from '../../AllButtons/ButtonA/ButtonA';


const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
};

const MusicPlayer = ({ playlist }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [repeatPlaylist, setRepeatPlaylist] = useState(false);
  const [volume, setVolume] = useState(100);
  
  const [shuffle, setShuffle] = useState(false); // Nuevo estado para reproducción aleatoria
  const audioRef = useRef(null);

  const handleToggleRepeat = () => {
    setRepeatPlaylist((prevRepeat) => !prevRepeat);
  };

  const handleToggleShuffle = () => {
    setShuffle((prevShuffle) => !prevShuffle);
  };

  useEffect(() => {
    
    const audio = audioRef.current;
    audio.src = process.env.PUBLIC_URL + playlist[currentSongIndex].src;
    audio.volume = volume / 100;

    const handleTimeUpdate = () => {
      const newProgress = (audio.currentTime / audio.duration) * 100;
      if (!isDragging) {
        setProgress(newProgress);
      }
      setCurrentTime(audio.currentTime);
    };

    const handleDurationChange = () => {
      setDuration(audio.duration);
    };

    const handleSongEnd = () => {
      if (currentSongIndex === playlist.length - 1 && !repeatPlaylist) {
        setIsPlaying(false);
      } else {
        if (shuffle) {
          const randomIndex = Math.floor(Math.random() * playlist.length);
          setCurrentSongIndex(randomIndex);
        } else {
          setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
        }
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('ended', handleSongEnd);

    if(isPlaying){
    audio.play();
    setIsPlaying(true);
    }

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('ended', handleSongEnd);
      audio.pause();
    };
  }, [currentSongIndex, playlist]);

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
      audioRef.current.volume = newVolume / 100; 
   
  };
  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleProgressBarClick = (event) => {
    const audio = audioRef.current;
    const progressBar = event.target;
    const clickX = event.clientX - progressBar.getBoundingClientRect().left;
    const percent = (clickX / progressBar.offsetWidth) * 100;

    audio.currentTime = (percent / 100) * audio.duration;

    // Verifica si la música está reproduciéndose antes de intentar iniciarla
    if (isPlaying) {
      audio.play();
    }
    
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDrag = (event) => {
    if (isDragging) {
      const audio = audioRef.current;
      const progressBar = event.target;
      const clickX = event.clientX - progressBar.getBoundingClientRect().left;
      const percent = (clickX / progressBar.offsetWidth) * 100;

      audio.currentTime = (percent / 100) * audio.duration;
      setProgress(percent);
    }
  };

  const reproducirSiguiente = () => {
    if (shuffle) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentSongIndex(randomIndex);
    } else {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    }
  };

  const reproducirAnterior = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length
    );
  };

  return (
    <div className="music-player">
    
    <section className='img-music-name-teme-interpete'>
      <CardMusicTheme sizeCardMusic={'75px'} imgSrc={playlist[currentSongIndex].img} titleTheme={playlist[currentSongIndex].titleTheme} titleArtist={playlist[currentSongIndex].artist}/>
    </section>

      <div className="All-controls-musicplayer">
        <section className='Content-Buttons-reproductor'>
        <button className="butons-reproductor" onClick={handleToggleShuffle} ><IconRandom color={shuffle ? 'var(--color-plum)' : '#d5d5d5'} />
          </button>
          <button className="butons-reproductor" onClick={reproducirAnterior}>
            <IconPlayBack />
          </button>
          <button className="butons-reproductor" onClick={handlePlayPause}>
            {isPlaying ? <IconPause /> : <IconPlay />}
          </button>
          <button className="butons-reproductor" onClick={reproducirSiguiente}>
            <IconPlayForward />
          </button>
          <button className="butons-reproductor" onClick={handleToggleRepeat}>
            {<IconArrowReload color={repeatPlaylist ? 'var(--color-plum)' : '#d5d5d5'}></IconArrowReload>}
          </button>
        </section>

        <section className='content-time-barprogress'>
          <div className="time">{formatTime(currentTime)}</div>
          <div className="progress-bar" onClick={handleProgressBarClick} onMouseDown={handleDragStart} onMouseUp={handleDragEnd} onMouseMove={handleDrag}>
            <div className="progress" style={{ width: `${progress}%` }}></div>
            <div className="slider" style={{ left: `${progress}%` }}></div>
          </div>
          <div className="time">{formatTime(duration)}</div>
        </section>
        <audio ref={audioRef}></audio>
      </div> 
      <section className=''>
      <SliderVolumen onChangeVolume={handleVolumeChange} />
      </section>
      <section>
        <ButtonA text={'Coleccionar'}></ButtonA>
      </section>
    </div>
  );
};

export default MusicPlayer;
