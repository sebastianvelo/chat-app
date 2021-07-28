import { User } from "app/types/user/User";
import Avatar from "../../common/Avatar";
import UserContainer from "../../common/UserContainer";

export interface AddresseeProps {
    user: User;
}

const Addressee: React.FC<AddresseeProps> = (props: AddresseeProps) => {
    return (
        <>
            <div className='col-span-2'>
                <Avatar src='https://picsum.photos/200' />
            </div>
            <div className='col-span-10'>
                <UserContainer {...props.user} />
            </div>
        </>
    );
}

export default Addressee;