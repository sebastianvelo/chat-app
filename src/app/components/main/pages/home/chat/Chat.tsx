import Window from "app/components/common/window/Window";
import Nav, { NavProps } from "app/components/nav/Nav";
import Message from "app/types/message/Message";
import { User, UserLoggedIn } from "app/types/user/User";
import { useState } from "react";
import Stylist, { Color, Position, Radius, SimpleColor, Sizing } from "stylist/Stylist";
import ChatBody from "./body/ChatBody";

const ChatStyle = Stylist.builder()
    .inMobile({
        position: Position.ABSOLUTE,
        bgColor: SimpleColor.WHITE,
        margin: {
            y: 1,
            x: 16,
        },
        width: Sizing.TEN_TWELFTH,
        borderRadius: Radius.LG,
        border: {
            left: 2,
            right: 2,
            bottom: 2,
            color: [Color.BLUE, 600]
        }
    })
    .build();

export interface ChatProps {
    chatNav: NavProps;
    userLoggedIn: UserLoggedIn;
    addressee: User;
    openChat: (addressee?: User) => void;
}

const Chat: React.FC<ChatProps> = (props: ChatProps) => {
    const [messages, setMessages] = useState<Message[]>([]);

    const getMessages = () => {
        return messages;
    }

    return (
        <div className={ChatStyle}>
            <Window close={() => props.openChat()} header={props.addressee.nick} />
            <Nav {...props.chatNav} />
            <ChatBody {...props} messages={getMessages()} />
        </div>
    );
}

export default Chat;