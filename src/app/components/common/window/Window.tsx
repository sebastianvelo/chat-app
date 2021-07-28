import Stylist, { FontSize, FontWeight, SimpleColor } from "stylist/Stylist";

export interface WindowProps {
    header: string;
    close?: () => void;
}

const WindowCSS = {
    background: 'linear-gradient( 180deg,#0997ff,#0053ee 8%,#0050ee 40%,#06f 88%,#06f 93%,#005bff 95%,#003dd7 96%,#003dd7)',
    padding: '3px 5px 3px 3px',
    borderTop: '1px solid #0831d9',
    borderLeft: '1px solid #0831d9',
    borderRight: '1px solid #001ea0',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '7px',
    fontSize: '13px',
    textShadow: '1px 1px #0f1089',
}

const WindowHeaderStyle = Stylist.builder()
    .inMobile({
        text: {
            size: FontSize.XS,
            color: SimpleColor.WHITE,
            weight: FontWeight.SEMIBOLD
        },
        padding: 1
    })
    .build();


const Window: React.FC<WindowProps> = (props: WindowProps) => {
    return (
        <div style={WindowCSS}>
            <p className={WindowHeaderStyle} onClick={props.close}>{props.header}</p>
        </div>
    );
}

export default Window;