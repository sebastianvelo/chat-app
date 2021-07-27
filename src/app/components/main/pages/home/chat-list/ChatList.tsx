import { User } from "app/types/user/User";
import Stylist, { Color, Cursor, Display, FontSize, FontWeight, Items, Radius } from "stylist/Stylist";

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

export interface ChatListProps {
    title: string;
    items?: User[];
}

const ChatList: React.FC<ChatListProps> = (props: ChatListProps) => {
    return (
        <details>
            <summary className={ChatListHeaderStyle}>
                <h1 className={ChatListTitleStyle}>{props.title}</h1>
                <span className={ChatListQuantityStyle}>({props.items?.length})</span>
            </summary>
            <div className={ChatListStyle}>
                {props.items?.map((contact, index) => (
                    <div className={ChatListItemStyle} key={index}>
                        <pre className={ChatListItemNickStyle}>
                            {contact.nick} 
                        </pre>
                        &nbsp;-&nbsp;
                        <pre>
                             {contact.info}
                        </pre>
                    </div>
                ))}
            </div>
        </details>
    );
}

export default ChatList;