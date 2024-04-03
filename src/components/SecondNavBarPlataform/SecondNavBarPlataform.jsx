import { Link } from 'react-router-dom';
import StadistcUserPlataformNav from '../GlobalComponents/StadistcUserPlataformNav/StadistcUserPlataformNav';
import './SecondNavBarPlataform.css'
const SecondNavBarPlataform = () => {
    return (
        <section className='content-allPrimary-secondNavBarPlataform'>
       <div className='content-all-secondNavBarPlataform'>    
            <StadistcUserPlataformNav></StadistcUserPlataformNav>
        <div className='secondNavBar-content-menu'>
            <ul className='ul-secondNavbar'>
                <li className='li-secondNavbar'><Link to={'/profile/releases'} className='a-secondNavbar'>Lanzamientos</Link></li>
                <li className='li-secondNavbar'><Link to={'/profile/posts'} className='a-secondNavbar'>Posts</Link></li>
                <li className='li-secondNavbar'><Link to={'/profile/collection'} className='a-secondNavbar'>Colecciones</Link></li>
                <li className='li-secondNavbar'><Link to={'/profile/playlist'} className='a-secondNavbar'>PlayList</Link></li>
            </ul>
        </div>
        </div> 
        </section>
    );
}

export default SecondNavBarPlataform;
