import Routes from "app/types/enums/Routes";
import { useState } from "react";
import data from "./AppData";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import Nav from "./nav/Nav";

const App: React.FC = () => {
    const [nav, setNav] = useState(data.nav);
    const [main, setMain] = useState(data.main);
    const [footer, setFooter] = useState(data.footer);

    const setLinkActive = (route: Routes) => {
        let links = nav.links.map(link => {
            if (link.pathname === route) {
                link.active = true;
            } else {
                link.active = false;
            }
            return link;
        })
        setNav({...nav, links: [...links]});
    }

    return (
        <>
            <Nav {...nav} />
            <Main {...main} setLinkActive={setLinkActive} />
            <Footer {...footer} />
        </>
    );
}

export default App;