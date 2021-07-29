import Stylist, { Color, FontSize, FontWeight } from "stylist/Stylist";
import Contact from "./Contact";
import { ContactListContainerProps } from "./ContactListContainer";

const ContactListStyle = Stylist.builder()
    .inMobile({
        text: {
            size: FontSize.XS,
            weight: FontWeight.MEDIUM,
            color: [Color.GRAY, 600]
        }
    })
    .build();

const ContactList: React.FC<ContactListContainerProps> = (props: ContactListContainerProps) => {
    return (
        <div className={ContactListStyle}>
            {props.contacts?.map((contact, index) => (
                <Contact contact={contact} index={index} openChat={props.openChat} />
            ))}
        </div>
    );
}

export default ContactList;