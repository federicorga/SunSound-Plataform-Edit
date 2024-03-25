import './PlataformMyCollections.css'
import PlayListTable from '../../PlayListTable/PlayListTable';
import { useMusicContext } from '../../providers/MusicProvider';

function PlataformMyCollections() {
const myPlaylist=useMusicContext();
  return (
    <div className='content-plataformMyCollection'>
      <PlayListTable songs={myPlaylist} ></PlayListTable>
    </div>
  );
}

export default PlataformMyCollections;
