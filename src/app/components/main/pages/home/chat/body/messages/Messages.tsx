import Message from "app/types/message/Message";
import Stylist, { Color, Display, FontSize, Overflow, Radius, SimpleColor, Sizing } from "stylist/Stylist";
import MessageContainer from "./MessageContainer";

const MessagesStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX,
        grid: {
            column: {
                span: 12
            }
        },
        padding: 5
    })
    .build();

const MessagesContainer = Stylist.builder()
    .inMobile({
        height: 60,
        width: Sizing.FULL,
        overflow: {
            y: Overflow.SCROLL,
        },
        text: {
            size: FontSize.SM
        },
        bgColor: SimpleColor.WHITE,
        padding: 4,
        border: {
            all: [2, Radius.MD],
            color: [Color.GRAY, 300]
        },
    })
    .build();

const MessagesCSS = {
    background: 'linear-gradient(180deg,rgba(238,249,250,1) 0%, #fff 20%, #fff 60%, rgba(238,249,250,1) 100%)',
}
export interface MessagesProps {
    messages: Message[];
}

const Messages: React.FC<MessagesProps> = (props: MessagesProps) => {
    const getLastSenderNick = (index: number) => props.messages[index - 1] ? props.messages[index - 1].sender.nick : '';
    return (
        <div className={MessagesStyle} style={MessagesCSS}>
            <div className={MessagesContainer}>
                {props.messages.length === 0 && <p>No tienes mensajes aún.</p>}
                {props.messages?.map((message, index) =>
                    <MessageContainer
                        sender={message.sender.nick}
                        lastSender={getLastSenderNick(index)}
                        message={message.message}
                        key={index}
                    />
                )}
            </div>
        </div>
    );
}

export default Messages;