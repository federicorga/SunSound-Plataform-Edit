
import './TextBoxLanding.css';
import { useMemo } from 'react';


function TextBoxLanding({ h2Text, h3Text, colorWords,imagen, applyStyle=false }) {


    const styleTextBoxLanding = useMemo(() => {
      // Si applyStyle es true, aplica el estilo, de lo contrario, devuelve un objeto vacío
      return applyStyle ? { flexDirection: 'row-reverse' } : {};
    }, [applyStyle]);  // Agrega applyStyle como dependencia si es necesario
  

  // Función para resaltar palabras específicas en el texto
  const highlightWords = (text, colorWords) => (
    //Chunk es fragmento o trozo (este puede ser una coma un punto o una palabra)
    // permite agarrar fragmento por fragmento y analizarlo.
    text.split(/\b/).map((chunk, index) => (
      /\w/.test(chunk) ? (
        colorWords.includes(chunk) ? <span key={index} className="text-color-B2"> {chunk} </span> : chunk 
      ) : (
        chunk // No resaltar signos de puntuación
      )
    ))
  );

  return (
    <section className='section-textbox-landing' style={styleTextBoxLanding}>
   {imagen && <img className="img-textboxlanding" alt="" src={imagen} />}
      <div className='div-content-h2-h3-textboxlanding'>
        <h2 className="h2-textboxlanding">
          {highlightWords(h2Text, colorWords)}
        </h2>
        <h3 className="h3-textboxlanding">
          {h3Text}
        </h3>
      </div>
    </section>
  );
}

export default TextBoxLanding;
