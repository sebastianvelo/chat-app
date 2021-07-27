import { BorderSide, BorderStyle, Hue, Opacity, Radius } from "stylist/Stylist";

interface Border {
    all?: BorderSide;
    top?: BorderSide;
    bottom?: BorderSide;
    right?: BorderSide;
    left?: BorderSide;
    radius?: Radius;
    color?: Hue;
    opacity?: Opacity;
    style?: BorderStyle;
}
export default Border;