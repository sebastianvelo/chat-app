import StyleSheetBuilder from "stylist/core/builder/StyleSheetBuilder";

export interface ImgProps {
    alt: string;
    src: string;
    style?: StyleSheetBuilder;
}

const Img: React.FC<ImgProps> = (props: ImgProps) => {
    return (<img className={props.style?.build()} alt={props.alt} src={props.src} />);
}

export default Img;