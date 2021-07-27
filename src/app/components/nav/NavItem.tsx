import { PrimaryHovereableTheme } from "app/styles/Themes";
import Stylist from "stylist/Stylist";

const NavItemStyle = Stylist.builder()
    .mix(PrimaryHovereableTheme)
    .inMobile({
        padding: {
            x: 4,
            y: 1
        }
    })
    .build();

export interface NavItemProps {
    label: string;
    options?: any[];
}

const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
    return (<span className={NavItemStyle}>{props.label}</span>);
}

export default NavItem;