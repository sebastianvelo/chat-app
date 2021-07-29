import { User } from "../user/User";

interface Message {
    sender: User;
    addressee: User;
    message: string;
}
export default Message;