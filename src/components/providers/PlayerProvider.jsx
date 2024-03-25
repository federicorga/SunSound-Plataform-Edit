import React, { useState, useRef, useEffect, useContext } from 'react';
import { useMusicContext } from './MusicProvider';



const playerContext = React.createContext();

export function usePlayerContext(){ //la funcion ejecuta el useContext
    return useContext(playerContext);
}


export function PlayerProvider({ children }) {


  const playlist= useMusicContext(); //Traigo la lista de musica para las funciones basicas


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

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${String(seconds).padStart(2, '0')}`;
      };


      const selectSong = (index) => {
        if (index >= 0 && index < playlist.length) {
          setCurrentSongIndex(index);
        }
      };
      
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

  const contextValue = {
    isPlaying,
    progress,
    currentTime,
    duration,
    isDragging,
    currentSongIndex,
    repeatPlaylist,
    volume,
    shuffle,
    audioRef,
    selectSong,
    formatTime,
    handleToggleRepeat,
    handleToggleShuffle,
    handleVolumeChange,
    handlePlayPause,
    handleProgressBarClick,
    handleDragStart,
    handleDragEnd,
    handleDrag,
    reproducirSiguiente,
    reproducirAnterior
};

  return (
    <playerContext.Provider value={contextValue}>
       {children}
    </playerContext.Provider>
  );
}


