import Stylist, { Color, Display, FlexDirection, FontSize, Size } from "stylist/Stylist";

const BottomFooterStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX,
        flex: {
            direction: FlexDirection.COL
        },
        padding: {
            y: 5,
            x: 3
        },
        border: {
            top: 2,
            color: [Color.GRAY, 900],
            opacity: 20
        },
        text: {
            size: FontSize.SM,
        },
        maxWidth: Size.SiXL,
        margin: 'auto',
    })
    .inMobile({
        flex: {
            direction: FlexDirection.ROW
        },
    })
    .build();

export interface BottomFooterProps {
    copyright: string;
}

const BottomFooter: React.FC<BottomFooterProps> = (props: BottomFooterProps) => {
    return (
        <div className={BottomFooterStyle}>
            {props.copyright}
        </div>
    );
}

export default BottomFooter;