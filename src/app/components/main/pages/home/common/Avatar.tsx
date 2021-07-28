import Img from "app/components/common/img/Img";
import Stylist, { BoxShadow, Cursor, Radius, Sizing } from "stylist/Stylist";

const AvatarContainerStyle = Stylist.builder()
    .inMobile({
        padding: {
            y: 1,
            x: 1,
        },
        borderRadius: Radius.XL,
        height: 20,
        width: 20,
    })
    .build();

const AvatarContainerCSS = {
    background: 'linear-gradient(180deg, rgba(237,245,247,1) 0%, rgba(188,198,203,1) 40%, rgba(167,195,210,1) 80%, rgba(177,207,225,1) 100%)',
    boxShadow: '1px 1px 10px black'
}

const AvatarStyle = Stylist.builder()
    .inMobile({
        shadow: BoxShadow.LG,
        cursor: Cursor.POINTER,
        height: Sizing.FULL,
        borderRadius: Radius.MD,
        width: Sizing.FULL,
    });

export interface AvatarProps {
    src: string;
}

const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
    return (
        <div className={AvatarContainerStyle} style={AvatarContainerCSS}>
            <Img style={AvatarStyle} src={props.src} alt='Avatar' />
        </div>
    );
}

export default Avatar;