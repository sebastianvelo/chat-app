import Img from "app/components/common/img/Img";
import Stylist, { BoxShadow } from "stylist/Stylist";

const AvatarStyle = Stylist.builder()
    .inMobile({
        height: 20,
        width: 20,
        shadow: BoxShadow.MD
    });

const AvatarContainerCSS = {
    background: 'linear-gradient(180deg, rgba(130,215,255,1) 0%, rgba(67,226,69,1) 33%, rgba(96,255,0,1) 100%, rgba(255,255,255,1) 100%)',
    padding: '7px 10px',
    borderRadius: '15px',
    boxShadow: '1px 1px 10px black'
}

export interface AvatarProps {
    src: string;
}

const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
    return (
        <div style={AvatarContainerCSS}>
            <Img style={AvatarStyle} src={props.src} alt='Avatar' />
        </div>
    );
}

export default Avatar;