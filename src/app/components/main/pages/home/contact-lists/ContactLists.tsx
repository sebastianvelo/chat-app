import { User } from "app/types/user/User";
import Stylist, { Overflow } from "stylist/Stylist";
import ContactListContainer from "./contact-list/ContactListContainer";

const ContactListsStyle = Stylist.builder()
    .inMobile({
        overflow: {
            y: Overflow.SCROLL
        }
    })
    .build();

const ContactListsCSS = {
    height: '55vh',
    background: 'linear-gradient(180deg, rgba(62,179,234,1) 0%, rgba(219,241,251,1) 0%, rgba(230,245,252,1) 12%, rgba(255,255,255,1) 100%)',
}

export interface ConctactListsProps {
    contacts?: User[];
    openChat: (user: User) => void;
}

const ConctactLists: React.FC<ConctactListsProps> = (props: ConctactListsProps) => {
    const lists = [
        {
            title: 'Conectados',
            contacts: props.contacts?.filter(contact => contact.status)
        },
        {
            title: 'No conectados',
            contacts: props.contacts?.filter(contact => !contact.status)
        },
    ]
    return (
        <div className={ContactListsStyle} style={ContactListsCSS}>
            {lists.map((list, index) => <ContactListContainer {...list} key={index} openChat={props.openChat} />)}
        </div>
    );
}

export default ConctactLists;