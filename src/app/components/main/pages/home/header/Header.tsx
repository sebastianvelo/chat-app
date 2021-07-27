import { User } from "app/types/user/User";
import Stylist, { Display } from "stylist/Stylist";
import Avatar from "./Avatar";
import UserContainer from "./UserContainer";

const HeaderStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX,
        spaceBetween: {
            x: 8
        },
        padding: 5,
    })
    .build();

const HeaderCSS = {
    background: 'linear-gradient(180deg, rgba(62,179,234,1) 0%, rgba(191,230,248,1) 57%, rgba(219,241,251,1) 100%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%)',
}

export interface HeaderProps {
    user: User;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

    return (
        <div className={HeaderStyle} style={HeaderCSS}>
            <Avatar src={props.user.avatar} />
            <UserContainer {...props.user} />
        </div>
    );
}

export default Header;