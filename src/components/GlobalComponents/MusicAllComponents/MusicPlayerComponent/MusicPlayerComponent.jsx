import React from 'react';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

function MusicPlayerComponent() {
  const myPlaylist = [
    { titleTheme: ' Open Your Eyes',artist:'Steve Angello & Alex Metric', src: '/audio/Steve Angello & Alex Metric - Open Your Eyes.mp3', img:'rectangle-67@2x.png' },
    { titleTheme: 'En el patio (Original Mix)',artist:'Arakaki', src: '/audio/Arakaki - En el patio (Original Mix).wav', img:'/rectangle-117@2x.png' },
    {titleTheme:'Generation X',artist:'Avicii & Sebastian Ingrosso',src: '/audio/Avicii & Sebastian Ingrosso  Alesso - Levels-Calling - W Dimitri Vegas  Like Mike   Generation X.mp3', img: '/rectangle-46@2x.png'},
    {titleTheme:'Coda', artist:'Taylorythm', src:'/audio/Taylorythm - Coda.mp3', img: '/rectangle-119@2x.png'}
    // Agregar más canciones según sea necesario
  ];
  return (
   <>
  
    <MusicPlayer playlist={myPlaylist}/>    
   </>
  );
}

export default MusicPlayerComponent;
