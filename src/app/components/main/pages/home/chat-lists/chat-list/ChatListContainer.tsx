import { User } from "app/types/user/User";
import ChatList from "./ChatList";
import ChatListHeader from "./ChatListHeader";

export interface ChatListContainerProps {
    title: string;
    items?: User[];
}

const ChatListContainer: React.FC<ChatListContainerProps> = (props: ChatListContainerProps) => {
    return (
        <details>
            <ChatListHeader {...props} />
            <ChatList {...props} />
        </details>
    );
}

export default ChatListContainer;