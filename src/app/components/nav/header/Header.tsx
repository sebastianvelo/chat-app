import Headline from "app/components/common/headline/Headline";
import Stylist, { FontSize, FontWeight } from "stylist/Stylist";

const HeaderStyle = Stylist.builder()
    .inMobile({
        text: {
            size: FontSize.XXL,
            weight: FontWeight.BOLD
        }
    });

export interface HeaderProps {
    header: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => <Headline style={HeaderStyle}>{props.header}</Headline>;

export default Header;