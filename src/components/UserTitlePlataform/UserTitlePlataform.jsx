import './UserTitlePlataform.css'
import CardImgUser from '../GlobalComponents/AllCards/CardImgUser/CardImgUser';
import UserName from '../GlobalComponents/AllTexts/UserName/UserName';
import IconVerify from '../GlobalComponents/IconBtn/IconVerify/IconVerify';


function UserTitlePlataform({userVerify=true, countSongs=10, countListener=30000}) {
  return (
<>
    <section className='content-all-userTitle-plataform'>
    <div className='content-usertitle-img'>
      <CardImgUser size='200px' imgUserurl={"rectangle-112@2x.png"}></CardImgUser>
    </div>
    <div className='content-usertitle-name-icon-verify'>
    <div className='content-usertitle-name-icon'>
      <UserName userName='Angel' upperCase={true}></UserName>
      {userVerify?<IconVerify  size={"50px"}></IconVerify>:''}
      </div>
      <h3 className='user-verification-text'>{userVerify? 'ARTISTA VERIFICADO':'ARTISTA NO VERIFICADO'}</h3>
      <p className='user-p-detalle-canciones-oyentes'>{countSongs} canciones publicadas - {countListener} oyentes</p>
      </div>
    </section>
     </>
  );
}

export default UserTitlePlataform;
