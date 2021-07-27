import StyleSheetBuilder from "stylist/core/builder/StyleSheetBuilder";

export interface ImgProps {
    alt: string;
    src: string;
    style?: StyleSheetBuilder;
    css?: { [key: string]: string };
}

const Img: React.FC<ImgProps> = (props: ImgProps) => {
    return (<img className={props.style?.build()} alt={props.alt} src={props.src} style={props.css} />);
}

export default Img;