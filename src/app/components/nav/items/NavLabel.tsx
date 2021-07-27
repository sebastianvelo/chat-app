import { PrimaryHovereableTheme } from "app/styles/Themes";
import Stylist, { Display } from "stylist/Stylist";

const NavItemStyle = Stylist.builder()
    .mix(PrimaryHovereableTheme)
    .inMobile({
        display: Display.FLEX,
        padding: {
            x: 4,
            y: 1
        }
    })
    .build();

export interface NavLabelProps {
    label: string;
}

const NavLabel: React.FC<NavLabelProps> = (props: NavLabelProps) => {
    return (
        <summary className={NavItemStyle}>
            <h1>{props.label}</h1>
        </summary>
    );
}

export default NavLabel;