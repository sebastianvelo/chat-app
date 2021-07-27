import { HeightValue, WidthValue, MaxHeightValue, MaxWidthValue, MinHeightValue, MinWidthValue } from "stylist/Stylist";

interface Sizing {
    height?: HeightValue;
    width?: WidthValue;
    maxHeight?: MaxHeightValue;
    maxWidth?: MaxWidthValue;
    minHeight?: MinHeightValue;
    minWidth?: MinWidthValue;
}
export default Sizing;