import { useMemo } from "react";
import "./ButtonPlataforma.css";

const ButtonPlataforma = ({
  dimensionsCode,
  property1DefaultBorder,
  property1DefaultPadding,
  property1DefaultBackgroundColor,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  plataformaDisplay,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      border: property1DefaultBorder,
      padding: property1DefaultPadding,
      backgroundColor: property1DefaultBackgroundColor,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultBorder,
    property1DefaultPadding,
    property1DefaultBackgroundColor,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const plataformaStyle = useMemo(() => {
    return {
      display: plataformaDisplay,
    };
  }, [plataformaDisplay]);

  return (
    <div className="property-1default2" style={property1Default1Style}>
      <img className="property-1default-child21" alt="" src={dimensionsCode} />
      <div className="plataforma1" style={plataformaStyle}>
        Plataforma
      </div>
    </div>
  );
};

export default ButtonPlataforma;
