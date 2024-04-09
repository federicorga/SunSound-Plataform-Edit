import './LoginCardUsers.css'
import ButtonA from '../GlobalComponents/AllButtons/ButtonA/ButtonA';
import IconCross from '../GlobalComponents/IconBtn/IconCross/IconCross';


function LoginCardUsers({onCloseForm, confirmlogin}) {

    const handleLoginButtonClick = () => {
        confirmlogin(); // Llamamos a la función onCloseForm para cerrar el formulario
      };
  return (
    <section className='loginCardUsers-box-containt'>

    <div className='button-close-logincardUsers'onClick={onCloseForm} ><IconCross></IconCross></div>

    <div className='title-logincardUserss-content'>
        <h2 className='title-logincardUsers-h2'>Ready to join SunSound?</h2>
        
    </div>
    <div className='form-logincardUsers-content'>
    <form className='form-logincardUsers' action="">
            <label className='label-logincardUsers' for="user">Email</label>
            <input className='input-logincardUsers' type="email" />
            <label className='label-logincardUsers' for="password">Password</label>
            <input className='input-logincardUsers'  type="password" />
        
          </form>
    </div>
    <div className='button-connect-logincarUser-content'>
        <div className='content-button-ingreso-logincardUser' onClick={handleLoginButtonClick}>
        <ButtonA text={"Login"} width={"100%"} colorButton={"#494fcd"}></ButtonA>
        </div>
        <p>o</p>
        <ButtonA text={"Sign in with your wallet"} width={"100%"} colorButton={"rgb(223 217 217 / 14%)"} ></ButtonA>
        </div>
    <div className='question-logincardUser-content'><p>Forgot your password?</p><span>click here</span></div>
      
    </section>
  );
}

export default LoginCardUsers;
