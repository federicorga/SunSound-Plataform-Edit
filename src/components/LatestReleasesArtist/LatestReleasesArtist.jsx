
import './LatestReleasesArtist.css'
import { useMusicContext } from '../providers/MusicProvider';
import PlayListTableArtistRelease from '../PlayListTableArtistRelease/PlayListTableArtistRelease';

function LatestReleasesArtist() {
    const myPlaylist=useMusicContext();

  return (
    <div>
      <PlayListTableArtistRelease songs={myPlaylist}></PlayListTableArtistRelease>
    </div>
  );
}

export default LatestReleasesArtist;
