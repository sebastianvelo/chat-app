import Img from "app/components/common/img/Img";
import Stylist, { BoxShadow, Cursor, Radius, Sizing } from "stylist/Stylist";

const AvatarContainerStyle = Stylist.builder()
    .inMobile({
        padding: 2,
        borderRadius: Radius.XL,
        height: 24,
        width: 24,
    })
    .build();

const AvatarContainerCSS = {
    background: 'linear-gradient(180deg, rgba(130,215,255,1) 0%, rgba(67,226,69,1) 33%, rgba(96,255,0,1) 100%, rgba(255,255,255,1) 100%)',
    boxShadow: '1px 1px 10px black'
}

const AvatarStyle = Stylist.builder()
    .inMobile({
        shadow: BoxShadow.MD,
        cursor: Cursor.POINTER,
        height: Sizing.FULL
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