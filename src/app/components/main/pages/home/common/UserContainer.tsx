import Stylist, { Color, Cursor, Display, FontSize, FontWeight, Items, TextDecoration } from "stylist/Stylist";

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
            weight: FontWeight.MEDIUM,
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

const InfoStyle = Stylist.builder()
    .inMobile({
        text: {
            size: FontSize.SM,
            decoration: TextDecoration.UNDERLINE,
            color: [Color.BLUE, 700]
        },
        cursor: Cursor.POINTER,
    })
    .hover({
        text: {
            color: [Color.BLUE, 600]
        }
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
            <h2 className={InfoStyle}>{props.info}</h2>
        </div>
    );
}

export default UserContainer;