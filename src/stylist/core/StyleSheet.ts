import { Hue, Opacity, Radius, BorderWidth, SizeNumber, Float, Display, Position, Overflow, BoxShadow, ZIndexValue, HeightValue, MaxHeightValue, MaxWidthValue, MinHeightValue, MinWidthValue, WidthValue, Transition } from "stylist/Stylist";
import Alignment from "./interface/alignment/Alignment";
import Background from "./interface/background/Background";
import Border from "./interface/border/Border";
import Divide from "./interface/border/Divide";
import Ring from "./interface/border/Ring";
import Flex from "./interface/flex/Flex";
import Grid from "./interface/grid/Grid";
import OverflowContainer from "./interface/overflow/Overflow";
import Placeholder from "./interface/placeholder/Placeholder";
import Sizing from "./interface/sizing/Sizing";
import SpaceBetween from "./interface/spacing/SpaceBetween";
import Spacing from "./interface/spacing/Spacing";
import Typography from "./interface/typography/Typography";

interface StyleSheet {
    //Background
    bg?: Background;
    bgColor?: Hue;
    bgOpacity?: Opacity;
    //Border
    border?: Border;
    borderRadius?: Radius;
    //Divide
    divide?: Divide;
    //Ring
    ring?: Ring;
    ringColor?: Hue;
    ringWidth?: BorderWidth;
    ringOpacity?: Opacity;
    //Margin
    margin?: SizeNumber | Spacing;
    //Padding
    padding?: SizeNumber | Spacing;
    //Space between
    spaceBetween?: SpaceBetween;
    //
    sizing?: Sizing;
    width?: WidthValue;
    height?: HeightValue;
    minWidth?: MinWidthValue;
    maxWidth?: MaxWidthValue;
    minHeight?: MinHeightValue;
    maxHeight?: MaxHeightValue;
    //Alignment
    mainAxis?: Alignment;
    crossAxis?: Alignment;
    bothAxis?: Alignment;
    //Layout
    flex?: Flex;
    grid?: Grid;
    float?: Float;
    display?: Display;
    position?: Position;
    top?: SizeNumber;
    bottom?: SizeNumber;
    right?: SizeNumber;
    left?: SizeNumber;
    overflow?: OverflowContainer | Overflow;
    //Typography
    text?: Typography;
    placeholder?: Placeholder;
    //Miscelaneous
    shadow?: BoxShadow;
    zIndex?: ZIndexValue;
    transition?: Transition;
    //TODO Cuando este todo listo, borrar
    [key: string]: any
}
export default StyleSheet;