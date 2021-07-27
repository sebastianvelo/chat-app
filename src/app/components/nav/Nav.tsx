import Stylist, { Display, FontSize, FontWeight } from "stylist/Stylist";
import NavItem, { NavItemProps } from "./items/NavItem";

const NavStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX,
        text: {
            size: FontSize.SM,
            weight: FontWeight.MEDIUM
        }
    })
    .build();

const NavCSS = {
    background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(198,218,221,1) 33%, rgba(162,195,200,1) 100%, rgba(255,255,255,1) 100%)'
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