import { Link } from 'react-router-dom';
import './SecondNavBarPlataform.css'
const SecondNavBarPlataform = () => {
    return (
        <div className='secondNavBar-content'>
            <ul className='ul-secondNavbar'>
                <li className='li-secondNavbar'><Link to={'/profile/releases'} className='a-secondNavbar'>Lanzamientos</Link></li>
                <li className='li-secondNavbar'><Link className='a-secondNavbar'>Posts</Link></li>
                <li className='li-secondNavbar'><Link className='a-secondNavbar'>Colecciones</Link></li>
                <li className='li-secondNavbar'><Link to={'/mycollections'} className='a-secondNavbar'>PlayList</Link></li>
            </ul>
        </div>
    );
}

export default SecondNavBarPlataform;
