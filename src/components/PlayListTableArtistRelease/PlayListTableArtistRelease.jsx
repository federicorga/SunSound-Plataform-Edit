import React, { useState, useEffect } from 'react';
import './PlayListTableArtistRelease.css';
import CardMusicTheme from '../GlobalComponents/AllCards/CardMusicTheme/CardMusicTheme';

import { usePlayerContext } from '../providers/PlayerProvider';
import ButtonA from '../GlobalComponents/AllButtons/ButtonA/ButtonA';
import IconEllipsis from '../GlobalComponents/IconBtn/IconEllipsis/IconEllipsis';


const PlayListTableArtistRelease = ({ songs }) => {



  const {
    isPlaying,
    selectSong,
    handlePlayPause,
    reproducirSiguiente,
    reproducirAnterior,
    handleToggleShuffle,
    handleToggleRepeat,
    formatTime,
    currentTime,
    duration,
    progress,
    handleProgressBarClick,
    handleDragStart,
    handleDragEnd,
    handleDrag,
    audioRef,
    currentSongIndex,
    shuffle,
    repeatPlaylist,
    handleVolumeChange
  } = usePlayerContext();
  


  const [durations, setDurations] = useState([]);

  // Función para formatear la duración en minutos y segundos
const formatDuration = (duration) => {
    if (!duration || isNaN(duration)) return '-:--';
  
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const fetchDurations = async () => {
      const durationsArray = await Promise.all(
        songs.map(async (song) => {
          // Verifica si song.src está presente y no está vacío
          if (song.src && song.src.trim() !== '') {
            const audio = new Audio(song.src);
            await audio.load();
            return new Promise((resolve) => {
              audio.onloadedmetadata = () => {
                resolve(audio.duration);
              };
            });
          } else {
            // Retorna null o un valor vacío si song.src no tiene contenido
            return null; // o return ''; para un valor vacío
          }
        })
      );
      setDurations(durationsArray);
    };
  
    fetchDurations();
  }, [songs]);
  

  return (
    <table className="table-PlayList">
      <thead className="thead-PlayList">
        <tr>
      
        </tr>
      </thead>
      <tbody>
        
        {songs?songs.map((song, index) => (
          <div className='content-themedetail-playlistArtisRelease'>
          <tr className='content-theme-playlistArtisRelease' key={index}>
            <td className="td-playlistArtisRelease"  onClick={()=> selectSong(index)}>
              
              <CardMusicTheme
                index={index}
                showHeartButton={false}
                sizeCardMusic={'60px'}
                imgSrc={song.img}
               
                titleTheme={song.titleTheme}
                titleArtist={song.artist}
                
              />
            </td>
      
            <td className='td-playListB'>{formatDuration(durations[index])}</td>
            <td> <ButtonA text={"Coleccionar"}></ButtonA></td>
            <td className='td-playlistrelease-ellipsis'><button className='btn-playlistrelease-ellipsis'><IconEllipsis></IconEllipsis></button></td>
          </tr>
          </div>
        )):""}
      </tbody>
    </table>
  );
};



export default PlayListTableArtistRelease;
