import Window from "app/components/common/window/Window";
import Message from "app/types/message/Message";
import { User, UserLoggedIn } from "app/types/user/User";
import { useEffect, useState } from "react";
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
    userLoggedIn: UserLoggedIn;
    addressee: User;
    openChat: (addressee?: User) => void;
}

const Chat: React.FC<ChatProps> = (props: ChatProps) => {
    const [messages, setMessages] = useState<Message[]>([]);

    const saveMessage = (message: string, sender: User = props.userLoggedIn, addressee: UserLoggedIn = props.addressee) => {
        setMessages([...messages, {
            message: message,
            addressee: addressee,
            sender: sender,
            time: new Date().toLocaleString(),
        },
        {
            message: 'Hola, no soy un bot inteligente :(',
            addressee: sender,
            sender: addressee,
            time: new Date().toLocaleString(),
        }]);
    }

    return (
        <div className={ChatStyle}>
            <Window close={() => props.openChat()} header={'Windows Live Messenger - ' + props.addressee.nick} />
            <ChatBody {...props} messages={messages} saveMessage={saveMessage}/>
        </div>
    );
}

export default Chat;