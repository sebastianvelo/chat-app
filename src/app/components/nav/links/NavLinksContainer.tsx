import Stylist, { Content, Display, TransitionProperty } from "stylist/Stylist";
import NavLink, { NavLinkProps } from "./NavLink";

const NavLinksStyle = Stylist.builder()
    .inMobile({
        display: Display.BLOCK,
        spaceBetween: {
            y: 1
        },
        padding: {
            y: 4
        },
    })
    .inLaptop({
        display: Display.FLEX,
        spaceBetween: {
            y: 0,
            x: 4
        },
        mainAxis: {
            content: Content.END,
        },
        padding: {
            y: 0
        }
    })
    .build();

export interface NavLinksContainerProps {
    links: NavLinkProps[];
}

const NavLinksContainer: React.FC<NavLinksContainerProps> = (props: NavLinksContainerProps) => {
    return (
        <div className={NavLinksStyle}>
            {props.links.map((link, i) => <NavLink key={i} {...link} />)}
        </div>
    );
}

export default NavLinksContainer;