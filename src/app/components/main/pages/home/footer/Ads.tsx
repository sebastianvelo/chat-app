import Stylist, { Color, Cursor, Display, FontSize, Items } from "stylist/Stylist";

const AdsStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX,
        border: {
            all: 2,
            color: [Color.GRAY, 900]
        },
        height: 4,
        padding: 12,
        crossAxis: {
            items: Items.CENTER
        },
        text: {
            size: FontSize.XXL,
            color: [Color.RED, 500]
        },
        bgColor: [Color.GRAY, 50],
        cursor: Cursor.POINTER,
    })
    .hover({
        text: {
            color: [Color.RED, 700]
        },
    })
    .build();

export interface AdsProps {
    ads: string;
}

const Ads: React.FC<AdsProps> = (props: AdsProps) => {
    return (
        <a className={AdsStyle} href={`https://www.linkedin.com/in/sebastian-velo/`}>
            {props.ads}
        </a>
    );
}

export default Ads;