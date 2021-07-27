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

export interface NavOptionsProps {
    options?: any[];
}

const NavOptions: React.FC<NavOptionsProps> = (props: NavOptionsProps) => {
    return (
        <div>
            {props.options && props.options.map((option, index) => (
                <p key={index}>
                    {option}
                </p>
            ))}
        </div>
    );
}

export default NavOptions;