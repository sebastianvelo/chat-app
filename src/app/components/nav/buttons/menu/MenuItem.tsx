import Link, { LinkProps } from "app/components/common/link/Link";
import { PrimaryHovereableTheme } from "app/styles/Themes";
import Stylist, { Display, FontSize, Radius } from "stylist/Stylist";

const MenuItemStyle = Stylist.builder()
    .mix(PrimaryHovereableTheme)
    .inMobile({
        display: Display.BLOCK,
        padding: {
            x: 4,
            y: 3
        },
        text: {
            size: FontSize.SM,
        },
        borderRadius: Radius.LG,
    })
    .build();

const MenuItem: React.FC<LinkProps> = (props: LinkProps) => <Link {...props} className={MenuItemStyle} />;

export default MenuItem;
