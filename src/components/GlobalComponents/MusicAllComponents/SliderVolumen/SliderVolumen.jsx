import React from 'react';
import './SliderVolumen.css';
import IconVolumen from '../../IconBtn/IconsButtonPlayer/IconVolumen';
const SliderVolumen = ({ onChangeVolume }) => {
  const handleVolumeChange = (event) => {
    const volume = event.target.value;
    onChangeVolume(volume);
  };

  return (
    <section className='content-all-vol-slider'>
    <section className='content-vol-Slider'>
      <label className="slider">
        <input
          type="range"
          className="level"
          orient="vertical"
          onChange={handleVolumeChange}
        />
      </label>
    </section>
    <button className=" butons-reproductor-volumen">
        <IconVolumen></IconVolumen>
      </button>
    </section>
  );
};

export default SliderVolumen;
