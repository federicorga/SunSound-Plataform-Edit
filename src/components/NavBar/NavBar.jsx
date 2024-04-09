import './NavBar.css'
import { useEffect, useState } from 'react';
import ButtonA from '../ButtonClickA/ButtonA';
function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Se ejecutará solo una vez al montar el componente
  
    
  return (
    <header  className={`${scrolled ? 'scrolled' : ''}`}>
    <div className="sunsound">
            <span className="sun">Sun</span>
            <span className="sound">Sound</span>
          </div>
      <div className='content-button-NavBar'>
          <ButtonA mostrarFlecha="true" text="Plataforma" Alto="58px" anchoSinFlecha="100rem" tamanoTexto="12px"/>
          </div>
     
    </header>
  );
}

export default NavBar;
