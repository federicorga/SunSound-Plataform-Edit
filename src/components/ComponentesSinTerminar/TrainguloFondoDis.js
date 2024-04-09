import { useMemo } from "react";
import "./TrainguloFondoDis.css";

const TrainguloFondoDis = ({
  imageId,
  property1Frame1Position,
  property1Frame1Top,
  property1Frame1Left,
  property1Frame1Opacity,
}) => {
  const property1Frame11Style = useMemo(() => {
    return {
      position: property1Frame1Position,
      top: property1Frame1Top,
      left: property1Frame1Left,
      opacity: property1Frame1Opacity,
    };
  }, [
    property1Frame1Position,
    property1Frame1Top,
    property1Frame1Left,
    property1Frame1Opacity,
  ]);

  return (
    <img
      className="property-1frame-12"
      alt=""
      src={imageId}
      style={property1Frame11Style}
    />
  );
};

export default TrainguloFondoDis;
