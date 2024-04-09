import TextBoxLanding from "../TextBoxLanding/TextBoxLanding";

function TextBoxLandingContentB() {
  return (
    <section className='content-textboxlanding-B'>
       <div className="textbox-contentB-left">
            <div className="width-box-text-landing">
            <TextBoxLanding colorWords={['Comparte']} h2Text={"Comparte tu Música"} h3Text={"Sube tus creaciones musicales y dale vida a cada nota convirtiéndola en cNFTs exclusivos. Presume ante la comunidad tus piezas únicas, mostrando cada momento de tu viaje musical."}/>
            </div>
        </div>
        <div className="textbox-contentB-right">
            <div className="width-box-text-landing">
            <TextBoxLanding  colorWords={['Explora']} h2Text={"Explora sonidos exclusivos"} h3Text={"Descubre un universo de sonidos únicos, cuidadosamente seleccionados por la comunidad de SunSound. Colecciona cada cNFT para añadir un toque personal a tu experiencia musical y sumergirte en un mundo de melodías inigualables"}/>
            </div>
        </div>
        <div className="textbox-contentB-left">
            <div className="width-box-text-landing">
            <TextBoxLanding colorWords={['Conecta']} h2Text={"Conecta con tus Artistas favoritos"} h3Text={"Interactúa con tus artistas favoritos en sesiones de streaming en vivo, accesibles mediante tokens $SUND. Participa en conversaciones interactivas, haz preguntas y profundiza tu vínculo con los creadores detrás de la"}/>
            </div>
        </div >
        <div className="textbox-contentB-right">
            <div className="width-box-text-landing">
            <TextBoxLanding  colorWords={['Descubre']} h2Text={"Descubre Cursos Musicales Exclusivos"} h3Text={"Amplía tus habilidades musicales con acceso exclusivo a cursos dentro de la plataforma, garantizado por la posesión del token $SUND. Mejora tus conocimientos a precios más accesibles y perfecciona tu arte"}/>
            </div>
        </div>
    </section>
  );
}

export default TextBoxLandingContentB;
