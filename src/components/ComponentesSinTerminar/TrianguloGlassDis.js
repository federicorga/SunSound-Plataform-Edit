import { useMemo } from "react";
import "./TrianguloGlassDis.css";

const TrianguloGlassDis = ({
  propTop,
  propLeft,
  propTransform,
  propTransformOrigin,
  propHeight,
  propWidth,
  propTop1,
  propRight,
  propBottom,
  propLeft1,
  propTransform1,
  propHeight1,
  propWidth1,
  propTop2,
  propRight1,
  propBottom1,
  propLeft2,
  propTransform2,
  propHeight2,
  propWidth2,
  propTop3,
  propRight2,
  propBottom2,
  propLeft3,
  propTransform3,
  propHeight3,
  propWidth3,
  propTop4,
  propRight3,
  propBottom3,
  propLeft4,
  propTransform4,
  propHeight4,
  propWidth4,
  propTop5,
  propRight4,
  propBottom4,
  propLeft5,
  propTransform5,
}) => {
  const trianguloGlassStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      transform: propTransform,
      transformOrigin: propTransformOrigin,
    };
  }, [propTop, propLeft, propTransform, propTransformOrigin]);

  const polygonIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      top: propTop1,
      right: propRight,
      bottom: propBottom,
      left: propLeft1,
      transform: propTransform1,
    };
  }, [
    propHeight,
    propWidth,
    propTop1,
    propRight,
    propBottom,
    propLeft1,
    propTransform1,
  ]);

  const polygonIcon1Style = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth1,
      top: propTop2,
      right: propRight1,
      bottom: propBottom1,
      left: propLeft2,
      transform: propTransform2,
    };
  }, [
    propHeight1,
    propWidth1,
    propTop2,
    propRight1,
    propBottom1,
    propLeft2,
    propTransform2,
  ]);

  const polygonIcon2Style = useMemo(() => {
    return {
      height: propHeight2,
      width: propWidth2,
      top: propTop3,
      right: propRight2,
      bottom: propBottom2,
      left: propLeft3,
      transform: propTransform3,
    };
  }, [
    propHeight2,
    propWidth2,
    propTop3,
    propRight2,
    propBottom2,
    propLeft3,
    propTransform3,
  ]);

  const polygonIcon3Style = useMemo(() => {
    return {
      height: propHeight3,
      width: propWidth3,
      top: propTop4,
      right: propRight3,
      bottom: propBottom3,
      left: propLeft4,
      transform: propTransform4,
    };
  }, [
    propHeight3,
    propWidth3,
    propTop4,
    propRight3,
    propBottom3,
    propLeft4,
    propTransform4,
  ]);

  const polygonIcon4Style = useMemo(() => {
    return {
      height: propHeight4,
      width: propWidth4,
      top: propTop5,
      right: propRight4,
      bottom: propBottom4,
      left: propLeft5,
      transform: propTransform5,
    };
  }, [
    propHeight4,
    propWidth4,
    propTop5,
    propRight4,
    propBottom4,
    propLeft5,
    propTransform5,
  ]);

  return (
    <section className="triangulo-glass" style={trianguloGlassStyle}>
      <img
        className="triangulo-glass-child"
        alt=""
        src="/polygon-1.svg"
        style={polygonIconStyle}
      />
      <img
        className="triangulo-glass-item"
        alt=""
        src="/polygon-3.svg"
        style={polygonIcon1Style}
      />
      <img
        className="triangulo-glass-inner"
        alt=""
        src="/polygon-4.svg"
        style={polygonIcon2Style}
      />
      <img
        className="polygon-icon"
        alt=""
        src="/polygon-5.svg"
        style={polygonIcon3Style}
      />
      <img
        className="triangulo-glass-child1"
        alt=""
        src="/polygon-2.svg"
        style={polygonIcon4Style}
      />
    </section>
  );
};

export default TrianguloGlassDis;
