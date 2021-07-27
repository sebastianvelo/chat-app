import OnClick from "app/types/events/OnClick";
import StyleSheetBuilder from "stylist/core/builder/StyleSheetBuilder";
import Stylist, { FontSize, FontWeight, Radius, BoxShadow } from "stylist/Stylist";

const ButtonStyle = (theme?: StyleSheetBuilder) => Stylist.builder()
    .mix(theme)
    .inMobile({
        shadow: BoxShadow.SM,
        padding: {
            x: 5,
            y: 3
        },
        text: {
            size: FontSize.SM,
            weight: FontWeight.MEDIUM,
        },
        borderRadius: Radius.MD
    })
    .build();

export interface ButtonProps {
    onClick?: OnClick;
    style?: StyleSheetBuilder;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button className={ButtonStyle(props.style)} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;