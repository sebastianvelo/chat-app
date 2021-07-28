import { NavProps } from "app/components/nav/Nav";
import { User, UserLoggedIn } from "app/types/user/User";
import { useState } from "react";
import ConctactLists from "./contact-lists/ContactLists";
import Chat from "./chat/Chat";
import Footer, { FooterProps } from "./footer/Footer";
import Header from "./header/Header";

export interface HomePageProps extends FooterProps {
    userLoggedIn: UserLoggedIn;
    chatNav: NavProps;
}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
    const [addressee, setAddressee] = useState<User>(); 
    return (
        <div>
            {addressee && <Chat {...props} addressee={addressee} setAddressee={setAddressee} />}
            <Header user={props.userLoggedIn} />
            <ConctactLists contacts={props.userLoggedIn.contacts} setAddressee={setAddressee} />
            <Footer ads={props.ads} />
        </div>
    );
}

export default HomePage;