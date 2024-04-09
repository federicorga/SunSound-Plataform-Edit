import Triangulo from '../Triangulo/Triangulo';
import './TrianguloContent.css'
function TrianguloContent({size=400}) {

    const sizeMit= size/2;
  return (
    <section className='content-triangulo-component'>
      <div className='triangulo-Content-grupA'>  
      <Triangulo size={size} rotation="260"/>
      <Triangulo size={sizeMit} rotation="0"/>
      </div>
      <div className='triangulo-Content-grupB'>  
      <Triangulo size={size} animationSpeed="25"/>
      </div>
      <div className='triangulo-Content-grupC'>  
      <Triangulo size={sizeMit}/>
      </div>
    </section>
  );
}

export default TrianguloContent;
