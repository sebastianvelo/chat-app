import Input from "app/components/common/input/Input";
import { UserLoggedIn } from "app/types/user/User";
import Avatar from "../../common/Avatar";

export interface SenderProps {
    userLoggedIn: UserLoggedIn;
}

const Sender: React.FC<SenderProps> = (props: SenderProps) => {
    return (
        <>
            <div className='col-span-2'>
                <Avatar src='https://picsum.photos/200' />
            </div>
            <div className='col-span-10'>
                <Input type='text' onChange={() => { }} name='message' />
            </div>
        </>
    );
}

export default Sender;