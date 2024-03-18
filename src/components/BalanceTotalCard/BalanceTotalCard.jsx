import './BalanceTotalCard.css'
import RectangleContent from '../GlobalComponents/RectangleContent/RectangleContent'
import ButtonA from '../GlobalComponents/AllButtons/ButtonA/ButtonA';
function BalanceTotalCard({UnityCoin ="$USDT", totalBalance ='00',profits ='00'}) {
  return (
    <>
      <RectangleContent titulo={'BALANCE TOTAL'} colorFondo={'url(/mask-group.svg)'} width={'330px'} height={'309px'} >
        <section className='content-all-balancetotal-card'>
            <div className='content-balancetota-card-info'>
            <div className='balancetotal-unicoin'>{UnityCoin}</div>
            <span className='balancetotal-total'>${totalBalance}</span>
            <span className='balancetota-profits'>Ganancias ${profits}</span>
            </div>
            <div className='content-balancetotal-card-buttons'>
                <ButtonA text={'Ingresar'}/>
                <ButtonA backgroundConfirm={false} text={'Retirar'}/>
                </div>
        </section>
      </RectangleContent>
    </>
  );
}

export default BalanceTotalCard;
