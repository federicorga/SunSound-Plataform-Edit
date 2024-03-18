import './UserConnectionConfirm.css'
import CardImgUser from '../../GlobalComponents/AllCards/CardImgUser/CardImgUser';
import UserName from '../../GlobalComponents/AllTexts/UserName/UserName';
import IconVerify from '../../GlobalComponents/IconBtn/IconVerify/IconVerify';
function UserConnectionConfirm() {
  return (
    <div className='user-conected-confirm-contain'>
          <CardImgUser imgUserurl={'rectangle-112@2x.png'} size='50px'/>
          <UserName userName='ANGEL' fontsize='1rem'></UserName>
          <IconVerify size='20px'></IconVerify>
    </div>
  );
}

export default UserConnectionConfirm;
