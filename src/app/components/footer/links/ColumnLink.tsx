import Link, { LinkProps } from "app/components/common/link/Link";
import Stylist, { Display, FontSize, FontWeight } from "stylist/Stylist";

const ColumnLinkStyle = Stylist.builder()
    .inMobile({
        margin: {
            y: 3,
        },
        display: Display.BLOCK,
        text: {
            size: FontSize.SM,
            weight: FontWeight.MEDIUM,
        },
    })
    .build();

const ColumnLink: React.FC<LinkProps> = (props: LinkProps) => {
    return (
        <div className={ColumnLinkStyle}>
            <Link {...props} />
        </div>
    );
}

export default ColumnLink;