import Window from "app/components/common/window/Window";
import Nav, { NavProps } from "app/components/nav/Nav";
import { User, UserLoggedIn } from "app/types/user/User";
import Stylist, { Color, Position, Radius, SimpleColor, Sizing } from "stylist/Stylist";
import ChatBody, { ChatBodyProps } from "./body/ChatBody";

export interface ChatProps extends ChatBodyProps {
    chatNav: NavProps;
    userLoggedIn: UserLoggedIn;
    setAddressee: (addressee: User | undefined) => void;
}

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

const Chat: React.FC<ChatProps> = (props: ChatProps) => {
    return (
        <div className={ChatStyle}>
            <Window close={() => props.setAddressee(undefined)} header={props.addressee.nick} />
            <Nav {...props.chatNav} />
            <ChatBody {...props} />
        </div>
    );
}

export default Chat;