import { PrimaryTheme } from "app/styles/Themes";
import Stylist, { Display, Items, TransitionProperty } from "stylist/Stylist";
import { ButtonsContainerProps } from "./buttons/ButtonsContainer";
import HeaderContainer, { HeaderContainerProps } from "./header/HeaderContainer";
import { NavLinksContainerProps } from "./links/NavLinksContainer";
import Navigation from "./navigation/Navigation";

const NavStyle = Stylist.builder()
    .mix(PrimaryTheme)
    .inMobile({
        display: Display.GRID,
        grid: {
            column: {
                template: 12
            }
        },
        crossAxis: {
            items: Items.CENTER
        },
        padding: {
            x: 4,
            y: 2
        },
        transition: [TransitionProperty.ALL, 300]
    })
    .build();

export interface NavProps extends HeaderContainerProps, NavLinksContainerProps, ButtonsContainerProps { }

const Nav: React.FC<NavProps> = (props: NavProps) => {
    return (
        <nav className={NavStyle}>
            <HeaderContainer header={props.header} />
            <Navigation links={props.links} menu={props.menu} />
        </nav>
    );
}

export default Nav;