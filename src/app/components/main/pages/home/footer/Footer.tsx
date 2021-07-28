import Stylist, { Color, Content, Display } from "stylist/Stylist";
import Ads, { AdsProps } from "./Ads";

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
    minHeight: '35vh',
    background: 'linear-gradient(180deg, rgba(62,179,234,1) 0%, rgba(219,241,251,1) 0%, rgba(202,231,243,1) 100%, rgba(255,255,255,1) 100%)',
}

export interface FooterProps extends AdsProps { }

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
    return (
        <footer className={FooterStyle} style={FooterCSS}>
            <Ads {...props} />
        </footer>
    );
}

export default Footer;