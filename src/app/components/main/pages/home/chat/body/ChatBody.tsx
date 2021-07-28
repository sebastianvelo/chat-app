import Stylist, { Display, Items } from "stylist/Stylist";
import Addressee, { AddresseeProps } from "./Addressee";
import Messages from "./Messages";
import Sender, { SenderProps } from "./Sender";

export interface ChatBodyProps extends SenderProps, AddresseeProps {}

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
            <Addressee {...props} />
            <Messages />
            <Sender {...props} />
        </div>

    );
}

export default ChatBody;