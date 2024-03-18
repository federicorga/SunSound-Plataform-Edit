import './UserName.css';
// Importa 'React' si no lo has hecho en tu archivo

function UserName({ userName = "unknown", fontsize = "3rem", upperCase = false, fontWeight=600 }) {
  const textstyle = {
    fontSize: fontsize,
    textTransform: upperCase ? 'uppercase' : 'none',
    fontWeight: fontWeight,
  };

  return (
    <>
      <h2 className='text-user-name' style={textstyle}>
        {userName}
      </h2>
    </>
  );
}

export default UserName;
