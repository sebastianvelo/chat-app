import Stylist, { Color, Cursor, Display, FontSize, FontWeight, Radius } from "stylist/Stylist";
import { ChatListContainerProps } from "./ChatListContainer";

const ChatListStyle = Stylist.builder()
    .inMobile({
        text: {
            size: FontSize.XS,
            weight: FontWeight.MEDIUM,
            color: [Color.GRAY, 600]
        }
    })
    .build();

const ChatListItemStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX,
        cursor: Cursor.POINTER,
        padding: {
            x: 6,
            y: 2
        },
        border: {
            all: [2, Radius.SM],
            color: 'transparent',
        },
    })
    .hover({
        bg: {
            color: [Color.BLUE, 50],
        },
        border: {
            all: [2, Radius.SM],
            color: [Color.BLUE, 300]
        },
    })
    .build();

const ChatListItemNickStyle = Stylist.builder()
    .inMobile({
        text: {
            weight: FontWeight.EXTRABOLD
        }
    })
    .build();

const ChatList: React.FC<ChatListContainerProps> = (props: ChatListContainerProps) => {
    return (
        <div className={ChatListStyle}>
            {props.items?.map((contact, index) => (
                <div className={ChatListItemStyle} key={index}>
                    <pre className={ChatListItemNickStyle}>{contact.nick}</pre>
                    &nbsp;-&nbsp;
                    <pre>{contact.info}</pre>
                </div>
            ))}
        </div>
    );
}

export default ChatList;