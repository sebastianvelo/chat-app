import { User } from "app/types/user/User";
import Stylist from "stylist/Stylist";
import Avatar from "../../common/Avatar";
import UserContainer from "../../common/UserContainer";

const AddresseeAvatarStyle = Stylist.builder()
    .inMobile({
        grid: {
            column: {
                span: 1
            }
        },
    })
    .build();

const AddresseeUserStyle = Stylist.builder()
    .inMobile({
        grid: {
            column: {
                span: 11
            }
        }
    })
    .build();

export interface AddresseeProps {
    addressee: User;
}

const Addressee: React.FC<AddresseeProps> = (props: AddresseeProps) => {
    return (
        <>
            <div className={AddresseeAvatarStyle}>
                <Avatar src={props.addressee.avatar} />
            </div>
            <div className={AddresseeUserStyle}>
                <UserContainer {...props.addressee} />
            </div>
        </>
    );
}

export default Addressee;