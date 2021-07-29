import Img from "app/components/common/img/Img";
import { User } from "app/types/user/User";
import Stylist, { Color, Cursor, Display, Radius, SimpleColor } from "stylist/Stylist";

const ContactStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX,
        cursor: Cursor.POINTER,
        padding: {
            x: 4,
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

const ContactNickStyle = Stylist.builder()
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

interface ContactProps {
    contact: User;
    index: number;
    openChat: (user: User) => void;
}

const Contact: React.FC<ContactProps> = (props: ContactProps) => {
    const src = props.contact.status ? 'https://raw.githubusercontent.com/AndroidWG/WLMOnline/master/assets/status/online.png' : 'https://github.com/AndroidWG/WLMOnline/blob/master/assets/status/invisible.png?raw=true';
    return (
        <div className={ContactStyle} key={props.index} onClick={() => props.openChat(props.contact)}>
            <Img style={IconStatusStyle} src={src} alt={props.contact.nick} />
            <pre className={ContactNickStyle}>{props.contact.nick}</pre>
            &nbsp;-&nbsp;
            <pre>{props.contact.info}</pre>
        </div>
    );
}

export default Contact;