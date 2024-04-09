import './BalanceTotalCard.css'
import RectangleContent from '../GlobalComponents/RectangleContent/RectangleContent'
import ButtonA from '../GlobalComponents/AllButtons/ButtonA/ButtonA';
function BalanceTotalCard({UnityCoin ="$USDT", totalBalance ='00',profits ='00'}) {
  return (
    <>
      <RectangleContent titulo={'TOTAL BALANCE'} colorFondo={'url(/mask-group.svg)'} width={'250px'} height={'250px'} >
        <section className='content-all-balancetotal-card'>
            <div className='content-balancetota-card-info'>
            <div className='balancetotal-unicoin'>{UnityCoin}</div>
            <span className='balancetotal-total'>${totalBalance}</span>
            <span className='balancetota-profits'>Earnings ${profits}</span>
            </div>
            <div className='content-balancetotal-card-buttons'>
                <ButtonA text={'Login'}/>
                <ButtonA backgroundConfirm={false} text={'Withdraw'}/>
                </div>
        </section>
      </RectangleContent>
    </>
  );
}

export default BalanceTotalCard;
