import Arrow from '../IconsElements/Arrow/Arrow';
import './ButtonA.css'

function ButtonA({text="Boton", mostrarFlecha=false, Alto="66.86%", anchoSinFlecha="11rem", tamanoTexto="20px"}) {
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
    <div className="content-button-A" style={containerStyles}><h3 style={styles.texto}>{text}</h3>
     {mostrarFlecha ? <div className='arrow-button-A'><Arrow /></div> : null}
    
  </div>
  );
}

export default ButtonA;
