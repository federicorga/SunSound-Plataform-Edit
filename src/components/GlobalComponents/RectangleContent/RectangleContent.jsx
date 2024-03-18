import './RectangleContent.css'
import PropTypes from 'prop-types';

function Rectangulo({ children, titulo, colorFondo='', width, height }) {
  const estiloRectangulo = {
    background: colorFondo,
    width:width,
    height:height,
    backgroundSize: 'cover',
  };

  return (
    <div className='rectangle-content-box' style={estiloRectangulo}>
      {titulo?<h2 className='retangle-content-titulo'>{titulo}</h2>:''}
      {children}
    </div>
  );
}

Rectangulo.propTypes = {
  children: PropTypes.node,
  colorFondo: PropTypes.string,
};

export default Rectangulo;
