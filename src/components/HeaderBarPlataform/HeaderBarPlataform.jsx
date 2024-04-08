import { useState } from 'react';
import ButtonA from '../GlobalComponents/AllButtons/ButtonA/ButtonA';
import './HeaderBarPlataform.css'
import SearchBar from '../GlobalComponents/SearchBar/SearchBar'

import UserConnectionConfirm from '../UserAllComponent/UserConnectionConfirm/UserConnectionConfirm';
import LoginCardUsers from '../LoginCardUsers/LoginCardUsers';
import ButtonActiveWallet from '../providers/AppWalletProvider';
const HeaderBarPlataform = () => {
  const [showFormlogin, setShowFormlogin] = useState(false);
  const [buttonIngreso, setbuttonIngreso] = useState(true);
    const CardLoginUserClickActive = () => {
      setShowFormlogin(true); // Al hacer clic en el CardImgMusic, muestra el formulario

    };
    const CardLoginUserClickClose = () => {
      setShowFormlogin(false); // Cierra el formulario al hacer clic en el botón de cierre
    };

    const CardLoginButtonIngresoConfirm = () => {
      setShowFormlogin(false);
      setbuttonIngreso(false);
    };
  
  return (
    <>
   
    <div className='content-header-barplataform'>
      <SearchBar></SearchBar>
      <ButtonActiveWallet></ButtonActiveWallet>
      
      {buttonIngreso ? (
        <div onClick={CardLoginUserClickActive}>
          <ButtonA colorButton={"#48278e"} text={'Ingresar'}  ></ButtonA>
          </div>
        ) : (
         <UserConnectionConfirm></UserConnectionConfirm>
        )}
        
      </div>
      {showFormlogin && <div className='content-form-logincarUsers-inPlataform'><LoginCardUsers onCloseForm={CardLoginUserClickClose} confirmlogin={CardLoginButtonIngresoConfirm}/></div>}
      
    </>
  );
}

export default HeaderBarPlataform;
