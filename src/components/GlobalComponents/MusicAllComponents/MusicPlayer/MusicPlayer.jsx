import React from "react";
import IconArrowReload from "../../IconBtn/IconsButtonPlayer/IconArrowReload";
import IconPause from "../../IconBtn/IconsButtonPlayer/IconPause";
import IconPlay from "../../IconBtn/IconsButtonPlayer/IconPlay";
import IconPlayBack from "../../IconBtn/IconsButtonPlayer/IconPlayBack";
import IconPlayForward from "../../IconBtn/IconsButtonPlayer/IconPlayForward";
import IconRandom from "../../IconBtn/IconsButtonPlayer/IconMixed"; // Importa el icono para reproducción aleatoria
import "./MusicPlayer.css";
import CardMusicTheme from "../../AllCards/CardMusicTheme/CardMusicTheme";
import SliderVolumen from "../SliderVolumen/SliderVolumen";
import ButtonA from "../../AllButtons/ButtonA/ButtonA";
import { usePlayerContext } from "../../../providers/PlayerProvider";
function MusicPlayer({ playlist }) {
  const {
    isPlaying,
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
    handleVolumeChange,
  } = usePlayerContext(); // Usa usePlayerContext para obtener valores y métodos del contexto

  return (
    <div className="music-player">
      <section className="img-music-name-teme-interpete">
        <CardMusicTheme
          sizeCardMusic={"48px"}
          imgSrc={playlist[currentSongIndex].img}
          titleTheme={playlist[currentSongIndex].titleTheme}
          titleArtist={playlist[currentSongIndex].artist}
        />
      </section>

      <div className="All-controls-musicplayer">
        <section className="Content-Buttons-reproductor">
          <button className="butons-reproductor" onClick={handleToggleShuffle}>
            <IconRandom color={shuffle ? "var(--color-plum)" : "#d5d5d5"} />
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
            {
              <IconArrowReload
                color={repeatPlaylist ? "var(--color-plum)" : "#d5d5d5"}
              ></IconArrowReload>
            }
          </button>
        </section>

        <section className="content-time-barprogress">
          <div className="time">{formatTime(currentTime)}</div>
          <div
            className="progress-bar"
            onClick={handleProgressBarClick}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseMove={handleDrag}
          >
            <div className="progress" style={{ width: `${progress}%` }}></div>
            <div className="slider" style={{ left: `${progress}%` }}></div>
          </div>
          <div className="time">{formatTime(duration)}</div>
        </section>
        <audio ref={audioRef}></audio>
      </div>
      <section className="">
        <SliderVolumen onChangeVolume={handleVolumeChange} />
      </section>
      <section>
        <ButtonA text={"Coleccionar"}></ButtonA>
      </section>
    </div>
  );
}

export default MusicPlayer;
