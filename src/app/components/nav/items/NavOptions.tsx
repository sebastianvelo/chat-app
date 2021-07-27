import { PrimaryHovereableTheme, PrimaryTheme } from "app/styles/Themes";
import Stylist, { FontSize, Position, Sizing } from "stylist/Stylist";

const NavOptionsStyle = Stylist.builder()
    .mix(PrimaryTheme)
    .inMobile({
        position: Position.ABSOLUTE,
        width: Sizing.ONE_SIXTH,
        text: {
            size: FontSize.XS
        },
        padding: {
            y: 1
        }
    })
    .build();


const NavOptionStyle = Stylist.builder()
    .mix(PrimaryHovereableTheme)
    .inMobile({
        padding: {
            x: 4,
        },
    })
    .build();

export interface NavOptionsProps {
    options?: any[];
}

const NavOptions: React.FC<NavOptionsProps> = (props: NavOptionsProps) => {
    return (
        <div className={NavOptionsStyle}>
            {props.options && props.options.map((option, index) => (
                <div className={NavOptionStyle} key={index}>
                    {option}
                </div>
            ))}
        </div>
    );
}

export default NavOptions;