import { NavProps } from "app/components/nav/Nav";
import { UserLoggedIn } from "app/types/user/User";
import ChatLists from "./chat-lists/ChatLists";
import Chat from "./chat/Chat";
import Footer, { FooterProps } from "./footer/Footer";
import Header from "./header/Header";

export interface HomePageProps extends FooterProps {
    userLoggedIn: UserLoggedIn;
    chatNav: NavProps;
}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
    return (
        <div>
            <Chat {...props} />
            <Header user={props.userLoggedIn} />
            <ChatLists contacts={props.userLoggedIn.contacts} />
            <Footer ads={props.ads} />
        </div>
    );
}

export default HomePage;