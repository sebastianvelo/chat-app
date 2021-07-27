import Stylist, { Display, FontSize, Items } from "stylist/Stylist";

const UserContainerStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX,
        spaceBetween: {
            x: 2
        },
        margin: {
            bottom: 8
        },
        crossAxis: {
            items: Items.CENTER
        }
    })
    .build();

const NickNameStyle = Stylist.builder()
    .inMobile({
        text: {
            size: FontSize.XL,
        },
    })
    .build();

const StatusStyle = Stylist.builder()
    .inMobile({
        text: {
            size: FontSize.SM,
        },
    })
    .build();

export interface UserContainerProps {
    nick: string;
    status: string;
    info: string;
}

const UserContainer: React.FC<UserContainerProps> = (props: UserContainerProps) => {
    return (
        <div>
            <div className={UserContainerStyle}>
                <h1 className={NickNameStyle}>{props.nick}</h1>
                <h1 className={StatusStyle}>{props.status}</h1>
            </div>
            <h2>{props.info}</h2>
        </div>
    );
}

export default UserContainer;