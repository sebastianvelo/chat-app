import Input from "app/components/common/input/Input";
import { UserLoggedIn } from "app/types/user/User";
import Stylist from "stylist/Stylist";
import Avatar from "../../common/Avatar";

const SenderAvatarStyle = Stylist.builder()
    .inMobile({
        grid: {
            column: {
                span: 2
            }
        }
    })
    .build();

const SenderChatboxStyle = Stylist.builder()
    .inMobile({
        grid: {
            column: {
                span: 10
            }
        }
    })
    .build();

export interface SenderProps {
    userLoggedIn: UserLoggedIn;
}

const Sender: React.FC<SenderProps> = (props: SenderProps) => {
    return (
        <>
            <div className={SenderAvatarStyle}>
                <Avatar src={props.userLoggedIn.avatar} />
            </div>
            <div className={SenderChatboxStyle}>
                <Input type='text' onChange={() => { }} name='message' />
            </div>
        </>
    );
}

export default Sender;