export interface MessageProps {
    message: string;
    sender: string;
    lastSender: string;
}

const MessageContainer: React.FC<MessageProps> = (props: MessageProps) => {
    return (
        <div>
            {props.sender !== props.lastSender && <p className='font-bold'>{props.sender} dice:</p>}
            <p>{props.message}</p>
        </div>
    );
}
export default MessageContainer;