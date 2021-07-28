import { User } from "app/types/user/User";
import ContactList from "./ContactList";
import ContactListHeader from "./ContactListHeader";

export interface ContactListContainerProps {
    title: string;
    items?: User[];
    setAddressee: (user: User) => void;
}

const ContactListContainer: React.FC<ContactListContainerProps> = (props: ContactListContainerProps) => {
    return (
        <details>
            <ContactListHeader {...props} />
            <ContactList {...props} />
        </details>
    );
}

export default ContactListContainer;