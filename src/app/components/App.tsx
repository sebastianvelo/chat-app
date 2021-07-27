import { useState } from "react";
import Stylist, { Overflow } from "stylist/Stylist";
import data from "./AppData";
import Main from "./main/Main";
import Nav from "./nav/Nav";

const AppStyle = Stylist.builder()
    .inMobile({
        maxHeight: 'screen',
        overflow: Overflow.HIDDEN
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