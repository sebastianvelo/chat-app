import NavLabel, { NavLabelProps } from "./NavLabel";
import NavOptions, { NavOptionsProps } from "./NavOptions";

export interface NavItemProps extends NavLabelProps, NavOptionsProps{}

const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
    return (
        <details>
            <NavLabel label={props.label} />
            <NavOptions options={props.options} />
        </details>
    );
}

export default NavItem;