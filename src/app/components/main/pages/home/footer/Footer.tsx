import Stylist, { Color, Content, Cursor, Display, FontSize, Items } from "stylist/Stylist";

const FooterStyle = Stylist.builder()
    .inMobile({
        padding: 3,
        display: Display.FLEX,
        mainAxis: {
            content: Content.CENTER
        },        
        border: {
            all: 2,
            color: [Color.BLUE, 300]
        },
    })
    .build();

const FooterCSS = {
    height: '30vh',
    background: 'linear-gradient(180deg, rgba(62,179,234,1) 0%, rgba(219,241,251,1) 0%, rgba(202,231,243,1) 100%, rgba(255,255,255,1) 100%)',
}

const AdsStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX,
        border: {
            all: 2,
            color: [Color.GRAY, 900]
        },
        height: 20,
        padding: 16,        
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

export interface FooterProps {
    ads: string;
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
    return (
        <footer className={FooterStyle} style={FooterCSS}>
            <div className={AdsStyle}>
                {props.ads}
            </div>
        </footer>
    );
}

export default Footer;