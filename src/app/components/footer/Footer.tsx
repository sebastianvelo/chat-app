import { PrimaryTheme } from "app/styles/Themes";
import Stylist from "stylist/Stylist";
import BottomFooter, { BottomFooterProps } from "./bottom/BottomFooter";
import ColumnsContainer, { ColumnsContainerProps } from "./links/ColumnsContainer";

const FooterStyle = Stylist.builder()
    .mix(PrimaryTheme)
    .inMobile({
        padding: {
            top: 5,
        }
    })
    .build();

export interface FooterProps extends ColumnsContainerProps, BottomFooterProps {}
 
const Footer: React.FC<FooterProps> = (props: FooterProps) => {
    return ( 
        <footer className={FooterStyle}>
            <ColumnsContainer columns={props.columns} />
            <BottomFooter copyright={props.copyright} />
        </footer>
     );
}
 
export default Footer;