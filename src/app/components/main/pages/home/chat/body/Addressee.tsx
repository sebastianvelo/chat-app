import { User } from "app/types/user/User";
import Stylist, { Display } from "stylist/Stylist";
import Avatar from "../../common/Avatar";
import UserContainer from "../../common/UserContainer";

const AddresseeStyle = Stylist.builder()
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

const AddresseeCSS = {
    background: 'linear-gradient(180deg, rgba(247,253,255,1) 0%, #c3ebff 50%, rgba(238,249,250,1) 100%)',
}

const AddresseeAvatarStyle = Stylist.builder()
    .inMobile({
        padding: {
            right: 10
        }
    })
    .build();

const AddresseeUserStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX
    })
    .build();

export interface AddresseeProps {
    addressee: User;
}

const Addressee: React.FC<AddresseeProps> = (props: AddresseeProps) => {
    return (
        <div className={AddresseeStyle} style={AddresseeCSS}>
            <div className={AddresseeAvatarStyle}>
                <Avatar src={props.addressee.avatar} />
            </div>
            <div className={AddresseeUserStyle}>
                <UserContainer {...props.addressee} />
            </div>
        </div>
    );
}

export default Addressee;