import Nav, { NavProps } from "app/components/nav/Nav";
import { UserLoggedIn } from "app/types/user/User";
import Stylist, { Position, Radius, SimpleColor, Sizing } from "stylist/Stylist";
import ChatBody from "./body/ChatBody";

export interface ChatProps {
    userLoggedIn: UserLoggedIn;
    chatNav: NavProps;
}

const ChatStyle = Stylist.builder()
    .inMobile({
        position: Position.ABSOLUTE,
        bgColor: SimpleColor.WHITE,
        margin: 10,
        width: Sizing.TEN_TWELFTH,
        maxHeight: 'auto',
        borderRadius: Radius.MD,
        border: {
            all: 2,
            color: SimpleColor.BLACK,
        },
    })
    .build();

const Chat: React.FC<ChatProps> = (props: ChatProps) => {
    return (
        <div className={ChatStyle}>
            <Nav {...props.chatNav} />
            <ChatBody userLoggedIn={props.userLoggedIn} />
        </div>
    );
}

export default Chat;