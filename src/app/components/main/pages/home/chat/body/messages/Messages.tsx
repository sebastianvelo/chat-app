import Message from "app/types/message/Message";
import MessageContainer from "./MessageContainer";

const Margin = () => <div className='col-span-12 mb-6'></div>;

export interface MessagesProps {
    messages: Message[];
}

const Messages: React.FC<MessagesProps> = (props: MessagesProps) => {
    const getLastSenderNick = (index: number) => props.messages[index - 1] ? props.messages[index - 1].sender.nick : '';
    return (
        <>
            <Margin />
            <div className='col-span-10 col-start-2 h-60 overflow-y-scroll text-sm'>
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
            <Margin />
        </>
    );
}

export default Messages;