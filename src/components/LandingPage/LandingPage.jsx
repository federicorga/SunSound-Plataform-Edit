import CardStar from '../CardStar/CardStar';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import SliderCursos from '../SliderCursos/SliderCursos';
import TextBoxLandingContentA from '../TextBoxLandingContent/TextBoxLandingContentA';
import TextBoxLandingContentB from '../TextBoxLandingContent/TextBoxLandingContentB';
import TrianguloContent from '../TrianguloContent/TrianguloContent';
import ButtonPrincipal from '../ButtonPrincipal/ButtonPrincipal';
import './LandingPage.css'
import UserOpinion from '../UserOpinion/UserOpinion';

function LandingPage() {
  return (
    <>
      <NavBar></NavBar>
      <section className='landing-Inicio-componentA'>
      <h1 >Únete a la revolución musical</h1>
      <h2>Donde la música se convierte en valor, tu pasión se transforma en ganancias</h2>
      </section>

      <section className='landing-ComponentPrimari'>
     
    <TextBoxLandingContentA></TextBoxLandingContentA>
      </section>

      <section className='landing-ComponentB'>
      <TrianguloContent size="500"/>
      <TextBoxLandingContentB></TextBoxLandingContentB>
      </section>

      <section className='Content-All-CardsStar'>
      <CardStar text="Escucha"></CardStar>
      <CardStar text="Crea"></CardStar>
      <CardStar text="Colecciona"></CardStar>
      <CardStar text="Aprende"></CardStar>
      </section>

      <section className='landing-ComponentC'>
        <h2>Colaboran</h2>
      <SliderCursos></SliderCursos>
      </section>
      
      <section className='landing-ComponentD'>
        <h2>Lo que opinan nuestros usuarios</h2>

      <div className='landing-content-UserOpinions'>
      <UserOpinion imgUser={'./rectangle-21@2x.png'} text={"¡SunSound es una revolución musical! 🎵 La experiencia personalizada de reproductor, acceso a cursos con descuentos y la posibilidad de interactuar con artistas en vivo hacen que esta app sea única. ¡No puedo esperar para explorar más y coleccionar mis NFTs musicales favoritos! 🚀 #SunSound #MúsicaTokenizada"} nameUser="pepito" nameUserPlataform={"pepitogic"}/>
      <UserOpinion imgUser={'./rectangle-21@2x.png'} text={"¡SunSound es una revolución musical! 🎵#SunSound"} nameUser="pepito" nameUserPlataform={"pepitogic"}/>
      <UserOpinion imgUser={'./rectangle-21@2x.png'} text={"¡SunSound es una revolución musical! 🎵 La experiencia personalizada de reproductor, acceso a cursos con descuentos y la posibilidad de interactuar con artistas en vivo hacen que esta app sea única. ¡No puedo esperar para explorar más y coleccionar mis NFTs musicales favoritos! 🚀 #SunSound #MúsicaTokenizada"} nameUser="pepito" nameUserPlataform={"pepitogic"}/>
      <UserOpinion imgUser={'./rectangle-21@2x.png'} text={"¡SunSound es una revolución musical! 🎵#SunSound"} nameUser="pepito" nameUserPlataform={"pepitogic"}/>
      </div>  
      </section>
      <section className='landing-ComponentE'>
      <div className="sec-button-ingresor">
    <h2>¿Qué esperas para ser parte de la revolución musical?</h2>
     <ButtonPrincipal Alto='77px' anchoSinFlecha='11rem' mostrarFlecha={false} text="Ingresar"></ButtonPrincipal>
     </div>
    </section>

    <Footer></Footer>

    </>
  );
}

export default LandingPage;
