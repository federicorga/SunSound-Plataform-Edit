import React, { useState, useEffect } from 'react';
import './PlayListTable.css';
import CardMusicTheme from '../GlobalComponents/AllCards/CardMusicTheme/CardMusicTheme';

import { usePlayerContext } from '../providers/PlayerProvider';



const PlayListTable = ({ songs }) => {



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
          <th className="th-PlayListA">Título</th>
          <th className="th-PlayListA">Álbum</th>
          <th className="th-PlayListA">Duración</th>
        
        </tr>
      </thead>
      <tbody>
        
        {songs?songs.map((song, index) => (
          <tr className='content-theme-playlist' key={index}>
            <td className="td-playListA"  onClick={()=> selectSong(index)}>
              
              <CardMusicTheme
            
                showHeartButton={false}
                sizeCardMusic={'60px'}
                imgSrc={song.img}
               
                titleTheme={song.titleTheme}
                titleArtist={song.artist}
                
              />
            </td>
            <td className='td-playListB'>{song.artist}</td>
            <td className='td-playListB'>{formatDuration(durations[index])}</td>
           
          </tr>
        )):""}
      </tbody>
    </table>
  );
};



export default PlayListTable;
