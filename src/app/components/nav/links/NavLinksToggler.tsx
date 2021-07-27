import Button from "app/components/common/button/Button";
import { HamburgerSvg } from "app/components/common/svg/Svg";
import Stylist, { Display, Position } from "stylist/Stylist";

const NavLinksTogglerStyle = Stylist.builder()
    .inMobile({
        position: Position.FIXED,
        top: 0,
        right: 0,
    })
    .inLaptop({
        display: Display.HIDDEN
    });

const NavLinksToggler: React.FC = () => {
    return ( 
        <Button style={NavLinksTogglerStyle}>
            {HamburgerSvg}
        </Button>
     );
}
 
export default NavLinksToggler;