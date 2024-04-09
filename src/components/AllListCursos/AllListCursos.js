import { useMemo } from "react";
import "./AllListCursos.css";

const AllListCursos = ({
  dimensionCode,
  dimensionCodeText,
  dimensionCodeValue,
  dimensionCodeText2,
  dimensionCodeIdentifier,
  dimensionCodeText3,
  dimensionCodeTextValue,
  dimensionCodeImage,
  dimensionCodeTextIdentifi,
  property1Frame1Position,
  property1Frame1Top,
  property1Frame1Left,
  lOGOWEB1IconLeft,
  lOGOWEB5IconLeft,
  lOGOWEB3IconLeft,
  sustain1IconLeft,
  sustain2IconLeft,
  lOGOWEB1IconLeft1,
  lOGOWEB5IconLeft1,
  sustain1IconLeft1,
  sustain2IconLeft1,
}) => {
  const property1Frame1Style = useMemo(() => {
    return {
      position: property1Frame1Position,
      top: property1Frame1Top,
      left: property1Frame1Left,
    };
  }, [property1Frame1Position, property1Frame1Top, property1Frame1Left]);

  const lOGOWEB1IconStyle = useMemo(() => {
    return {
      left: lOGOWEB1IconLeft,
    };
  }, [lOGOWEB1IconLeft]);

  const lOGOWEB5IconStyle = useMemo(() => {
    return {
      left: lOGOWEB5IconLeft,
    };
  }, [lOGOWEB5IconLeft]);

  const lOGOWEB3IconStyle = useMemo(() => {
    return {
      left: lOGOWEB3IconLeft,
    };
  }, [lOGOWEB3IconLeft]);

  const sustain1IconStyle = useMemo(() => {
    return {
      left: sustain1IconLeft,
    };
  }, [sustain1IconLeft]);

  const sustain2IconStyle = useMemo(() => {
    return {
      left: sustain2IconLeft,
    };
  }, [sustain2IconLeft]);

  const lOGOWEB1Icon1Style = useMemo(() => {
    return {
      left: lOGOWEB1IconLeft1,
    };
  }, [lOGOWEB1IconLeft1]);

  const lOGOWEB5Icon1Style = useMemo(() => {
    return {
      left: lOGOWEB5IconLeft1,
    };
  }, [lOGOWEB5IconLeft1]);

  const sustain1Icon1Style = useMemo(() => {
    return {
      left: sustain1IconLeft1,
    };
  }, [sustain1IconLeft1]);

  const sustain2Icon1Style = useMemo(() => {
    return {
      left: sustain2IconLeft1,
    };
  }, [sustain2IconLeft1]);

  return (
    <>
    <div className="property-1frame-11 logos-slide " style={property1Frame1Style}>

     
        <img
          className="logo-web-1-icon2 "
          alt=""
          src={dimensionCode}
          style={lOGOWEB1IconStyle}
        />
        <img
          className="logo-web-5-icon2 "
          alt=""
          src={dimensionCodeText}
          style={lOGOWEB5IconStyle}
        />
        <img
          className="logo-web-3-icon1 "
          alt=""
          src={dimensionCodeValue}
          style={lOGOWEB3IconStyle}
        />
        <img
          className="sustain-1-icon2 "
          alt=""
          src={dimensionCodeText2}
          style={sustain1IconStyle}
        />
        <img
          className="sustain-2-icon2 "
          alt=""
          src={dimensionCodeIdentifier}
          style={sustain2IconStyle}
        />
        <img
          className="logo-web-1-icon3 "
          alt=""
          src={dimensionCodeText3}
          style={lOGOWEB1Icon1Style}
        />
        <img
          className="logo-web-5-icon3 "
          alt=""
          src={dimensionCodeTextValue}
          style={lOGOWEB5Icon1Style}
        />
        <img
          className="sustain-1-icon3 "
          alt=""
          src={dimensionCodeImage}
          style={sustain1Icon1Style}
        />
        <img
          className="sustain-2-icon3 "
          alt=""
          src={dimensionCodeTextIdentifi}
          style={sustain2Icon1Style}
        />

      
    </div>
      <div className="property-1frame-11 logos-slide " style={property1Frame1Style}>

     
      <img
        className="logo-web-1-icon2 "
        alt=""
        src={dimensionCode}
        style={lOGOWEB1IconStyle}
      />
      <img
        className="logo-web-5-icon2 "
        alt=""
        src={dimensionCodeText}
        style={lOGOWEB5IconStyle}
      />
      <img
        className="logo-web-3-icon1 "
        alt=""
        src={dimensionCodeValue}
        style={lOGOWEB3IconStyle}
      />
      <img
        className="sustain-1-icon2 "
        alt=""
        src={dimensionCodeText2}
        style={sustain1IconStyle}
      />
      <img
        className="sustain-2-icon2 "
        alt=""
        src={dimensionCodeIdentifier}
        style={sustain2IconStyle}
      />
      <img
        className="logo-web-1-icon3 "
        alt=""
        src={dimensionCodeText3}
        style={lOGOWEB1Icon1Style}
      />
      <img
        className="logo-web-5-icon3 "
        alt=""
        src={dimensionCodeTextValue}
        style={lOGOWEB5Icon1Style}
      />
      <img
        className="sustain-1-icon3 "
        alt=""
        src={dimensionCodeImage}
        style={sustain1Icon1Style}
      />
      <img
        className="sustain-2-icon3 "
        alt=""
        src={dimensionCodeTextIdentifi}
        style={sustain2Icon1Style}
      />

    
  </div>
  </>
  );
};

export default AllListCursos;
