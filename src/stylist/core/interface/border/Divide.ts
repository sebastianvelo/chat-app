import { BorderStyle, BorderWidth, Hue, Opacity } from "stylist/Stylist";

interface Divide {
    width?: {
        x?: BorderWidth;
        y?: BorderWidth;
    },
    color?: Hue;
    opacity?: Opacity;
    style?: BorderStyle;
}
export default Divide;