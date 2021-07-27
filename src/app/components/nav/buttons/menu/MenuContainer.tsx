import Dropdown from "app/components/common/dropdown/Dropdown";
import Menu, { MenuProps } from "./Menu";
import MenuToggler, { MenuTogglerProps } from "./MenuToggler";

export interface MenuContainerProps extends MenuProps, MenuTogglerProps { }

const MenuContainer: React.FC<MenuContainerProps> = (props: MenuContainerProps) => {
    return (<Dropdown trigger={<MenuToggler toggler={props.toggler} />} content={<Menu items={props.items} />} />);
}

export default MenuContainer;