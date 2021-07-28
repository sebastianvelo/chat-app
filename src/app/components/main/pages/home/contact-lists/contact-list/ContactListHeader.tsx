import Stylist, { Color, Cursor, Display, FontSize, FontWeight, Items } from "stylist/Stylist";
import { ContactListContainerProps } from "./ContactListContainer";

const ContactListHeaderStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX,
        spaceBetween: {
            x: 2
        },
        crossAxis: {
            items: Items.CENTER
        },
        padding: {
            x: 4,
            y: 1
        },
        cursor: Cursor.POINTER
    })
    .hover({
        bg: {
            color: [Color.BLUE, 100],
        }
    })
    .build();

const ContactListTitleStyle = Stylist.builder()
    .inMobile({
        text: {
            weight: FontWeight.MEDIUM,
            color: [Color.GRAY, 900]
        }
    })
    .build();

const ContactListQuantityStyle = Stylist.builder()
    .inMobile({
        text: {
            size: FontSize.XS,
            color: [Color.GRAY, 600]
        }
    })
    .build();

const ContactListHeader: React.FC<ContactListContainerProps> = (props: ContactListContainerProps) => {
    return (
        <summary className={ContactListHeaderStyle}>
            <h1 className={ContactListTitleStyle}>{props.title}</h1>
            <span className={ContactListQuantityStyle}>({props.items?.length})</span>
        </summary>
    );
}

export default ContactListHeader;