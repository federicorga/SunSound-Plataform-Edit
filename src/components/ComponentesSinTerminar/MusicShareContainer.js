import { useMemo } from "react";
import "./MusicShareContainer.css";

const MusicShareContainer = ({
  actionText,
  musicDescription,
  musicCreationDescription,
  propTop,
  propPadding,
  propTextAlign,
}) => {
  const textoInicioStyle = useMemo(() => {
    return {
      top: propTop,
      padding: propPadding,
    };
  }, [propTop, propPadding]);

  const comparteTuMsicaContainerStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className="texto-inicio4" style={textoInicioStyle}>
      <h1
        className="comparte-tu-msica-container"
        style={comparteTuMsicaContainerStyle}
      >
        <span>{actionText}</span>
        <span className="tu-msica">{musicDescription}</span>
      </h1>
      <div className="frame1">
        <h3 className="sube-tus-creaciones">{musicCreationDescription}</h3>
        <img
          className="game-iconssound-waves4"
          alt=""
          src="/gameiconssoundwaves@2x.png"
        />
      </div>
    </div>
  );
};

export default MusicShareContainer;
