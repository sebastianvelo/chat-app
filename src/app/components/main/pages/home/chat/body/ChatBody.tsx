import Stylist, { Display, Items } from "stylist/Stylist";
import Addressee, { AddresseeProps } from "./Addressee";
import Messages, { MessagesProps } from "./messages/Messages";
import Sender, { SenderProps } from "./Sender";

const ChatBodyStyle = Stylist.builder()
    .inMobile({
        display: Display.GRID,
        grid: {
            column: {
                template: 12
            }
        },
        crossAxis: {
            items: Items.CENTER
        },
    })
    .build();

export interface ChatBodyProps extends SenderProps, AddresseeProps, MessagesProps { }

const ChatBody: React.FC<ChatBodyProps> = (props: ChatBodyProps) => {
    return (
        <div className={ChatBodyStyle}>
            <Addressee {...props} />
            <Messages {...props} />
            <Sender {...props} />
        </div>

    );
}

export default ChatBody;