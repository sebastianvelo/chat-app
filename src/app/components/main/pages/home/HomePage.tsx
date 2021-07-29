import { NavProps } from "app/components/nav/Nav";
import { User, UserLoggedIn } from "app/types/user/User";
import { useState } from "react";
import Chat from "./chat/Chat";
import ConctactLists from "./contact-lists/ContactLists";
import Footer, { FooterProps } from "./footer/Footer";
import Header from "./header/Header";

export interface HomePageProps extends FooterProps {
    userLoggedIn: UserLoggedIn;
}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
    const [addressee, setAddressee] = useState<User>(); 

    const openChat = (user?: User) => {
        setAddressee(user);
    }

    return (
        <div>
            {addressee && <Chat {...props} addressee={addressee} openChat={openChat} />}
            <Header user={props.userLoggedIn} />
            <ConctactLists contacts={props.userLoggedIn.contacts} openChat={openChat} />
            <Footer ads={props.ads} />
        </div>
    );
}

export default HomePage;