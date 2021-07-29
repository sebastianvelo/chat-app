import Input from "app/components/common/input/Input";
import { UserLoggedIn } from "app/types/user/User";
import Stylist, { Display, Items, Sizing } from "stylist/Stylist";
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

const SenderAvatarStyle = Stylist.builder()
    .inMobile({
        padding: {
            right: 10
        }
    })
    .build();

const SenderChatboxStyle = Stylist.builder()
    .inMobile({
        crossAxis: {
            items: Items.CENTER
        },
        display: Display.FLEX,
        width: Sizing.FULL
    })
    .build();

export interface SenderProps {
    userLoggedIn: UserLoggedIn;
}

const Sender: React.FC<SenderProps> = (props: SenderProps) => {
    return (
        <div className={SenderStyle} style={SenderCSS}>
            <div className={SenderAvatarStyle} >
                <Avatar src={props.userLoggedIn.avatar} />
            </div>
            <div className={SenderChatboxStyle}>
                <Input type='text' onChange={() => { }} name='message' />
            </div>
        </div>
    );
}

export default Sender;