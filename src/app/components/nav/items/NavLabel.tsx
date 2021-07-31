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
    const closeAllDetails = () => {
        const details = Array.from(document.querySelectorAll('nav details'));
        details.forEach(detail => detail.removeAttribute("open"));
    }
    return (
        <summary className={NavItemStyle} onClick={closeAllDetails}>
            <h1>{props.label}</h1>
        </summary>
    );
}

export default NavLabel;