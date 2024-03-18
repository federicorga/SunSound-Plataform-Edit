import './ButtonNavBar.css'

function ButtonNavBar({textButton,iconbutton}) {
  return (
    <>
    <div>
    {iconbutton}
    <div className='button-navbar-plataforms'>
    {textButton}
    </div>
    </div>
    </>
   
  );
}

export default ButtonNavBar;
