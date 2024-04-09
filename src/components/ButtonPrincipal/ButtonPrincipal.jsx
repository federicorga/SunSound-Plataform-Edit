import Arrow from '../IconsElements/Arrow/Arrow';
import './ButtonPrincipal.css'

function ButtonPrincipal({text="Boton", mostrarFlecha=false, Alto="66.86%", anchoSinFlecha="11rem", tamanoTexto="20px"}) {
  const styles = {
    anchoButton:{
      width:anchoSinFlecha,
      height:Alto, 
    
    },
    texto: {
      fontSize: tamanoTexto,
    },
   
  }
  const containerStyles = mostrarFlecha ? { height:Alto} : styles.anchoButton;
  return (
    <div className="content-button-plataforma" style={containerStyles}><h3 style={styles.texto}>{text}</h3>
     {mostrarFlecha ? <div className='arrow-button-Plataforma'><Arrow /></div> : null}
    
  </div>
  );
}

export default ButtonPrincipal;
