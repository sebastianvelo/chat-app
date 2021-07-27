import Routes from "app/types/enums/Routes";
import { Link as LinkReact } from "react-router-dom";

export interface LinkProps {
    pathname: Routes;
    label: string;
    search?: string;
    hash?: string;
    state?: object;
    className?: string;
}

const Link: React.FC<LinkProps> = (props: LinkProps) => <LinkReact key={props.pathname} className={props.className} to={{...props}}>{props.label}</LinkReact>;
export default Link;