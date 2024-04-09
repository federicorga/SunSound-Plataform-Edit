import './UserOpinion.css'
import CardImgUser from '../CardImgUser/CardImgUser'
function UserOpinion({text,imgUser,nameUser,nameUserPlataform}) {
  return (
    <>

    <div className="user-opinion-content-all">
        <section className='content-box-all-user-opinions'>
        <p className="user-opion-p">{text}</p>
        <div className="content-user-opinion-img-username">
           <CardImgUser imgUserurl={imgUser}></CardImgUser>
            <div className='user-opinion-content-userinfo'>
                <h2>{nameUser}</h2>
                <h3>@{nameUserPlataform}</h3>
            </div>
        </div>
        </section>
    </div>
      
    </>
  );
}

export default UserOpinion;
