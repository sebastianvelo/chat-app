import { User } from "app/types/user/User";
import Stylist, { Overflow } from "stylist/Stylist";
import ChatListContainer from "./chat-list/ChatListContainer";

const ChatListsStyle = Stylist.builder()
    .inMobile({
        overflow: Overflow.SCROLL
    })
    .build();

const ChatListsCSS = {
    height: '60vh',
    background: 'linear-gradient(180deg, rgba(62,179,234,1) 0%, rgba(219,241,251,1) 0%, rgba(230,245,252,1) 12%, rgba(255,255,255,1) 100%)',
}

export interface ChatListProps {
    contacts?: User[];    
}

const ChatLists: React.FC<ChatListProps> = (props: ChatListProps) => {
    const lists = [
        {
            title: 'Conectados',
            items: props.contacts?.filter(contact => contact.status)
        },
        {
            title: 'No conectados',
            items: props.contacts?.filter(contact => !contact.status)
        },
    ]
    return (
        <div className={ChatListsStyle} style={ChatListsCSS}>
            {lists.map((list, index) => <ChatListContainer {...list} key={index} />)}
        </div>
    );
}

export default ChatLists;