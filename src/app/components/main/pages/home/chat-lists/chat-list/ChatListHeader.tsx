import Stylist, { Color, Cursor, Display, FontSize, FontWeight, Items } from "stylist/Stylist";
import { ChatListContainerProps } from "./ChatListContainer";

const ChatListHeaderStyle = Stylist.builder()
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

const ChatListTitleStyle = Stylist.builder()
    .inMobile({
        text: {
            weight: FontWeight.MEDIUM,
            color: [Color.GRAY, 900]
        }
    })
    .build();

const ChatListQuantityStyle = Stylist.builder()
    .inMobile({
        text: {
            size: FontSize.XS,
            color: [Color.GRAY, 600]
        }
    })
    .build();

const ChatListHeader: React.FC<ChatListContainerProps> = (props: ChatListContainerProps) => {
    return (
        <summary className={ChatListHeaderStyle}>
            <h1 className={ChatListTitleStyle}>{props.title}</h1>
            <span className={ChatListQuantityStyle}>({props.items?.length})</span>
        </summary>
    );
}

export default ChatListHeader;