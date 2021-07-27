import { LinkProps } from "app/components/common/link/Link";
import { DefaultTheme } from "app/styles/Themes";
import Stylist, { BoxShadow, Color, Position, Radius } from "stylist/Stylist";
import MenuItem from "./MenuItem";

const MenuStyle = Stylist.builder()
    .mix(DefaultTheme)
    .inMobile({
        right: 0,
        shadow: BoxShadow.XL,
        position: Position.ABSOLUTE,
        borderRadius: Radius.LG,
        width: 48,
        padding: 1,
        ring: {
            color: [Color.GRAY, 900],
            width: 2,
            opacity: 5
        }
    })
    .build();

export interface MenuProps {
    items: LinkProps[];
}

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
    return (
        <div className={MenuStyle}>
            {props.items.map((item, i) => <MenuItem key={i} {...item} />)}
        </div>
    );
}

export default Menu;