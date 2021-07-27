import { FontFamily, FontSize, FontWeight, Hue, LetterSpacing, LineHeight, Opacity, TextAlign, TextDecoration, TextOverflow, TextTransform } from "stylist/Stylist";

interface Typography {
    align?: TextAlign;
    family?: FontFamily;
    weight?: FontWeight;
    decoration?: TextDecoration;
    overflow?: TextOverflow;
    transform?: TextTransform;
    letterSpacing?: LetterSpacing;
    lineHeight?: LineHeight;
    size?: FontSize;
    color?: Hue;
    opacity?: Opacity;
}
export default Typography;