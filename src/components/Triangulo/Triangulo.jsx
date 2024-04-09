import './Triangulo.css'
import { useMemo } from 'react';
function Triangulo({rotation, size="200",animationSpeed}) {

    const styleTriangule = useMemo(() => {
        return {
        transform: `rotate(${rotation}deg)`,
        width: `${size}px`,
        height: `${size}px`,
        animation: animationSpeed ? `rotate ${animationSpeed}s linear infinite` : 'none',
        };
      }, [
        rotation,
        size,
        animationSpeed,
        
      ]);

  return (
    <>
    <div className='rotating' style={styleTriangule}>
   <img className="property-triangulo" alt="" src="/component-8.svg"></img>
   </div>
    </>
  );
}

export default Triangulo;
