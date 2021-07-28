import { useState } from "react";
import Stylist, { Display, Overflow, Sizing } from "stylist/Stylist";
import data from "./AppData";
import Main from "./main/Main";
import Nav from "./nav/Nav";

const AppStyle = Stylist.builder()
    .inMobile({
        display: Display.HIDDEN,
        maxHeight: Sizing.SCREEN,
        overflow: Overflow.HIDDEN
    })
    .inTablet({
        display: Display.BLOCK,
    })
    .build();

const App: React.FC = () => {
    const [nav, setNav] = useState(data.nav);
    const [main, setMain] = useState(data.main);

    return (
        <div className={AppStyle}>
            <Nav {...nav} />
            <Main {...main} />
        </div>
    );
}

export default App;