import { Link } from 'react-router-dom';
import './NavBarPlataform.css'
import ButtonNavBar from '../GlobalComponents/AllButtons/ButtonNavBar/ButtonNavBar';
import IconProfile from '../GlobalComponents/IconBtn/IconProfile/IconProfile';
import IconCoin from '../GlobalComponents/IconBtn/IconCoin/IconCoin';
import IconColeccion from '../GlobalComponents/IconBtn/IconColeccion/IconColeccion';
import IconHome from '../GlobalComponents/IconBtn/IconHome/IconHome'
import IconCurso from '../GlobalComponents/IconBtn/IconCurso/IconCurso';

function NavBarPlataform() {
  return (
    <nav className='navbar-plataform'>
      <section className='Logo-content-plataform'>
        <div className='div-content-logo-plataform-link'>
        <img src="logo-color-1@2x.png" alt=""  width={60}/>
        <img className='img-logo-tituloSund' src="logo-color-2@2x.png" alt="" width={90}/>
        </div>
        
      </section>
      <section className='content-buttons-navbar'>
       <div className='div-content-img-button-navbar'>
       <div className='div-img-ico-navbar'><IconHome></IconHome></div>
       <Link to="/"> 
      <ButtonNavBar textButton={'Home'}></ButtonNavBar>
      </Link>
      </div>
      <div className='div-content-img-button-navbar'>
      <div className='div-img-ico-navbar'><IconColeccion></IconColeccion></div>
      <Link to="/profile/collection"> 
      <ButtonNavBar textButton={'Tu colección'}></ButtonNavBar>
      </Link>
      </div>
      <div className='div-content-img-button-navbar'>
      <div className='div-img-ico-navbar'><IconCurso></IconCurso></div>
      <Link to="/courses">
      <ButtonNavBar textButton={'Cursos'}></ButtonNavBar>
      </Link>
      </div>
      <div className='div-content-img-button-navbar'>
      <div className='div-img-ico-navbar'><IconCoin></IconCoin></div>
      <Link to="/tokenomics">
      <ButtonNavBar textButton={'Tokenomics'}></ButtonNavBar>
      </Link>
      </div>

      
      <div className='div-content-img-button-navbar'>
        <div className='div-img-ico-navbar'><IconProfile></IconProfile></div>
      <Link to="/profile/releases">
      <ButtonNavBar textButton={'Perfil'}></ButtonNavBar>
      </Link>
      </div>
      </section>
    </nav>
  );
}

export default NavBarPlataform;
