import { UserLoggedIn } from "app/types/user/User";
import ChatLists from "./chat-list/ChatLists";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export interface HomePageProps {
}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
    const userLoggedIn: UserLoggedIn = {
        avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
        nick: 'Sébástíán...... 😎 AGUANTE EL ARSE',
        status: '(Conectado)',
        info: 'Una Nueva Noche Fria - CJS!!!!!!! 🎵🎵🎵🎵',
        contacts: [
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '(Conectado)',
                info: 'CUMBIAAAA!!! 🎵',
            },
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '(Conectado)',
                info: 'CUMBIAAAA!!! 🎵',
            },
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '(Conectado)',
                info: 'CUMBIAAAA!!! 🎵',
            },
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '(Conectado)',
                info: 'CUMBIAAAA!!! 🎵',
            },
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '(Conectado)',
                info: 'CUMBIAAAA!!! 🎵',
            },
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '(Conectado)',
                info: 'CUMBIAAAA!!! 🎵',
            },
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '(Conectado)',
                info: 'CUMBIAAAA!!! 🎵',
            },
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '(Conectado)',
                info: 'CUMBIAAAA!!! 🎵',
            },
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '(Conectado)',
                info: 'CUMBIAAAA!!! 🎵',
            },
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '⬜ ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '',
                info: 'CUMBIAAAA!!! 🎵',
            },
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '⬜ ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '',
                info: 'CUMBIAAAA!!! 🎵',
            },
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '⬜ ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '',
                info: 'CUMBIAAAA!!! 🎵',
            },
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '⬜ ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '',
                info: 'CUMBIAAAA!!! 🎵',
            },
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '⬜ ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '',
                info: 'CUMBIAAAA!!! 🎵',
            },
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '⬜ ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '',
                info: 'CUMBIAAAA!!! 🎵',
            },
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '⬜ ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '',
                info: 'CUMBIAAAA!!! 🎵',
            },
            {
                avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                nick: '⬜ ( --- / /// Lorem Pipsum // / /_-- ))',
                status: '',
                info: 'CUMBIAAAA!!! 🎵',
            },
        ]
    }
    return ( 
        <div>
            <Header user={userLoggedIn} />
            <ChatLists contacts={userLoggedIn.contacts} />
            <Footer />
        </div>
     );
}
 
export default HomePage;