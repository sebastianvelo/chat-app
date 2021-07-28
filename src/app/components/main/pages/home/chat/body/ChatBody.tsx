import { UserLoggedIn } from "app/types/user/User";
import Stylist, { Display, Items } from "stylist/Stylist";
import Addressee from "./Addressee";
import Messages from "./Messages";
import Sender from "./Sender";

export interface ChatBodyProps {
    userLoggedIn: UserLoggedIn;
}

const ChatBodyCSS = {
    background: ' linear-gradient(180deg, rgba(140,219,255,1) 0%, rgba(212,242,255,1) 10%, rgba(255,255,255,1) 73%, rgba(213,242,255,1) 100%)',
}

const ChatBodyStyle = Stylist.builder()
    .inMobile({
        display: Display.GRID,
        grid: {
            column: {
                template: 12
            }
        },
        padding: 8,
        crossAxis: {
            items: Items.CENTER
        },
    })
    .build();


const ChatBody: React.FC<ChatBodyProps> = (props: ChatBodyProps) => {
    return (
        <div className={ChatBodyStyle} style={ChatBodyCSS}>
            <Addressee user={props.userLoggedIn} />
            <Messages />
            <Sender userLoggedIn={props.userLoggedIn} />
        </div>

    );
}

export default ChatBody;