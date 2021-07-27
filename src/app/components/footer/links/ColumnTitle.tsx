import Headline from "app/components/common/headline/Headline";
import Stylist, { FontSize, FontWeight, TextTransform } from "stylist/Stylist";

const ColumnTitleStyle = Stylist.builder()
    .inMobile({
        text: {
            size: FontSize.SM,
            weight: FontWeight.BOLD,
            transform: TextTransform.UPPERCASE
        },
        margin: {
            bottom: 6,
        }
    });

export interface ColumnTitleProps {
    title: string
}

const ColumnTitle: React.FC<ColumnTitleProps> = (props: ColumnTitleProps) => {
    return (<Headline style={ColumnTitleStyle}>{props.title}</Headline>);
}

export default ColumnTitle;