import React from 'react';
import { useMusicContext } from '../../../providers/MusicProvider';

import MusicPlayer from '../MusicPlayer/MusicPlayer';

function MusicPlayerComponent() {
const myPlaylist = useMusicContext();
  return (
   <>
  
    <MusicPlayer playlist={myPlaylist}/>
   
   </>
  );
}

export default MusicPlayerComponent;
