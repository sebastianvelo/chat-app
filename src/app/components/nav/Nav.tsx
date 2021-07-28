import Stylist, { Display, FontSize, FontWeight } from "stylist/Stylist";
import NavItem, { NavItemProps } from "./items/NavItem";

const NavStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX,
        text: {
            size: FontSize.XS,
            weight: FontWeight.MEDIUM
        }
    })
    .build();

const NavCSS = {
    background: 'rgba(236, 233, 216, 1)'
}

export interface NavProps {
    items: NavItemProps[];
}

const Nav: React.FC<NavProps> = (props: NavProps) => {
    return (
        <nav className={NavStyle} style={NavCSS}>
            {props.items.map((item, index) => (<NavItem {...item} key={index} />))}
        </nav>
    );
}

export default Nav;