import Img from "app/components/common/img/Img";
import Stylist, { Color, Cursor, Display, FontSize, FontWeight, Radius, SimpleColor } from "stylist/Stylist";
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

const ContactListItemStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX,
        cursor: Cursor.POINTER,
        padding: {
            x: 6,
        },
        border: {
            all: [2, Radius.SM],
            color: SimpleColor.TRANSPARENT,
        },
    })
    .hover({
        bg: {
            color: [Color.BLUE, 50],
        },
        border: {
            all: [2, Radius.SM],
            color: [Color.BLUE, 300]
        },
    })
    .build();

const ContactListItemNickStyle = Stylist.builder()
    .inMobile({
        text: {
            color: SimpleColor.BLACK
        }
    })
    .build();

const IconStatusStyle = Stylist.builder()
    .inMobile({
        width: 4,
        height: 4,
    });

const ContactList: React.FC<ContactListContainerProps> = (props: ContactListContainerProps) => {
    const src = (status: string) => status ? 'https://raw.githubusercontent.com/AndroidWG/WLMOnline/master/assets/status/online.png' : 'https://github.com/AndroidWG/WLMOnline/blob/master/assets/status/invisible.png?raw=true';
    return (
        <div className={ContactListStyle}>
            {props.items?.map((contact, index) => (
                <div className={ContactListItemStyle} key={index} onClick={() => props.setAddressee(contact)}>
                    <Img style={IconStatusStyle} src={src(contact.status)} alt='Online' />
                    <pre className={ContactListItemNickStyle}>{contact.nick}</pre>
                    &nbsp;-&nbsp;
                    <pre>{contact.info}</pre>
                </div>
            ))}
        </div>
    );
}

export default ContactList;