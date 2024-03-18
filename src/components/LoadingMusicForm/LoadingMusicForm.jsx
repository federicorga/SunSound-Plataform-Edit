import IconCross from '../GlobalComponents/IconBtn/IconCross/IconCross';
import './LoadingMusicForm.css'

function LoadingMusicForm({ onCloseForm }) {
  return (
    <section className='loadingMusicForm-box'>
    <div className='button-close-LoadingMusicForm' onClick={onCloseForm}><IconCross></IconCross></div>
    <section className='content-form-title-boxPictur'>
      <div className='content-title-and-form-loadingMusic'>
        <div>
            <h2 className='loading-music-titleh2'>Publica una nueva canción</h2>
        </div>
      <div className='content-form-loadingMusic'>
        <form className='form-laadingMusic' action="">
            <label className='label-loadingmusic' for="nombre de cancion">nombre de cancion</label>
            <input className='input-loadingmusic' type="text" />
            <label className='label-loadingmusic' for="">Artistas que colaboran</label>
            <input className='input-loadingmusic' type="text" />
            <label className='label-loadingmusic' for="">Precio a pagar</label>
            <input className='input-loadingmusic' type="text" />
            <label className='label-loadingmusic' for="">Programar la publicación</label>
            <input className='input-loadingmusic' type="text" />
            <label className='label-loadingmusic' for="mensaje">Escribe un mensaje</label>
            <textarea className='textarea-loadingmusic' id="mensaje" name="mensaje" rows="4" cols="50"></textarea>
          </form>
      </div>
      </div>
      <div className='add-picture-box-loadingMusic'>
        <div className='picture-box-content-text-loadingMusic'>
          <p>+</p>
          <p>Agregar una foto de portada</p>
        </div>
      </div>
      </section>
    </section>
  );
}

export default LoadingMusicForm;
