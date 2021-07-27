import Button from "app/components/common/button/Button";
import Img, { ImgProps } from "app/components/common/img/Img";
import Stylist, { Color, Cursor, Radius } from "stylist/Stylist";

const MenuTogglerStyle = Stylist.builder()
    .inMobile({
        height: 6,
        width: 6,
        borderRadius: Radius.FULL,
        cursor: Cursor.POINTER,
    })
    .focus({
        ring: {
            width: 2,
            color: [Color.YELLOW, 700]
        }
    });

export interface MenuTogglerProps {
    toggler: ImgProps;
}

const MenuToggler: React.FC<MenuTogglerProps> = (props: MenuTogglerProps) => {
    return <Button><Img {...props.toggler} style={MenuTogglerStyle} /></Button>
};

export default MenuToggler;