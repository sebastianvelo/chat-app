import StyleSheetBuilder from "stylist/core/builder/StyleSheetBuilder";
import Stylist, { FontSize, FontWeight } from "stylist/Stylist";

const HeadlineStyle = Stylist.builder()
    .inMobile({
        text: {
            size: FontSize.FoXL,
            weight: FontWeight.BOLD,
        },
        padding: {
            y: 5
        }
    })
    .build();

export interface HeadlineProps {
    style?: StyleSheetBuilder
    children: string;
}

const Headline: React.FC<HeadlineProps> = (props: HeadlineProps) => {
    const className = props.style?.build() ?? HeadlineStyle;
    return (<h2 className={className}>{props.children}</h2>);
}

export default Headline;