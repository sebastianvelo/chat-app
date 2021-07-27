import { PrimaryActiveTheme, PrimaryHovereableTheme } from "app/styles/Themes";
import Link, { LinkProps } from "app/components/common/link/Link";
import Stylist, { Display, FontWeight, Radius, TransitionProperty } from "stylist/Stylist";

const NavLinkStyle = Stylist.builder()
    .inMobile({
        display: Display.BLOCK,
        text: {
            weight: FontWeight.SEMIBOLD,
        },
        padding: {
            y: 2,
            x: 3
        },
        borderRadius: Radius.MD,
        transition: [TransitionProperty.ALL, 500]
    });

const NavLinkStyleDefault = Stylist.builder().mix(NavLinkStyle).mix(PrimaryHovereableTheme).build();
const NavLinkStyleActive = Stylist.builder().mix(NavLinkStyle).mix(PrimaryActiveTheme).build();

export interface NavLinkProps extends LinkProps {
    active: boolean;
}
 
const NavLink: React.FC<NavLinkProps> = (props: NavLinkProps) => {
    const className = props.active ? NavLinkStyleActive : NavLinkStyleDefault;
    return (<Link className={className} {...props} />);
}
 
export default NavLink;