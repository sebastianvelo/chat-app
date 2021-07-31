import Input from "app/components/common/input/Input";
import { UserLoggedIn } from "app/types/user/User";
import { useState } from "react";
import Stylist, { Color, Display, Items, SimpleColor, Sizing } from "stylist/Stylist";
import Avatar from "../../common/Avatar";

const SenderStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX,
        grid: {
            column: {
                span: 12
            }
        },
        padding: {
            x: 6,
            y: 4,
        }
    })
    .build();

const SenderCSS = {
    background: 'linear-gradient(180deg, rgba(238,249,250,1) 0%, #c3ebff 50%, rgba(238,249,250,1) 100%)',
}

const SenderChatboxStyle = Stylist.builder()
    .inMobile({
        crossAxis: {
            items: Items.CENTER
        },
        padding: {
            left: 6,
        },
        display: Display.FLEX,
        width: Sizing.FULL
    })
    .build();

const SendetButtonStyle = Stylist.builder()
    .inMobile({
        bgColor: [Color.GRAY, 50],
        padding: 2,
        margin: {
            x: 2
        },
        border: {
            all: 1,
            color: SimpleColor.BLACK
        }
    })
    .build();

const SenderButtonCSS = {
    border: '1px solid black'
}

export interface SenderProps {
    userLoggedIn: UserLoggedIn;
    saveMessage: (message: string) => void;
}

const Sender: React.FC<SenderProps> = (props: SenderProps) => {
    const [message, setMessage] = useState<string>('');

    const saveMessage = (message: string) => {
        props.saveMessage(message);
        setMessage('');
    }

    const handleKeyUp = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            saveMessage(message);
        }
    }

    return (
        <div className={SenderStyle} style={SenderCSS}>
            <div>
                <Avatar src={props.userLoggedIn.avatar} />
            </div>
            <div className={SenderChatboxStyle}>
                <Input type='text' onChange={setMessage} onKeyUp={handleKeyUp} name='message' value={message} />
                <button className={SendetButtonStyle} style={SenderButtonCSS} onClick={() => saveMessage(message)}>Enviar mensaje.</button>
            </div>
        </div>
    );
}

export default Sender;