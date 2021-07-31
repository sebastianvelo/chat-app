import { User } from "../user/User";

interface Message {
    sender: User;
    addressee: User;
    message: string;
    time?: string;
}
export default Message;