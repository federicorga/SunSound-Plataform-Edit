import './ButtonA.css'

function ButtonA({text,colorText,sizeText,width, height ,colorButton ='var(--color-blueviolet-100)',backgroundConfirm=true }) {

    const buttonStyle={
        width:width,
        height:height,
        backgroundColor:backgroundConfirm?colorButton: '',
        borderColor:colorButton,
    }

    const textStyle={
        fontSize: sizeText,
        color:colorText
    }
  return (
    <>
      <button className='button-A' style={buttonStyle}><span className='button-A-text' style={textStyle}>{text}</span></button>
    </>
  );
}

export default ButtonA;
