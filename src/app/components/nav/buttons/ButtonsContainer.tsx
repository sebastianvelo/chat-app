import Stylist, { Content, Display, Items } from "stylist/Stylist";
import MenuContainer, { MenuContainerProps } from "./menu/MenuContainer";
import ThemeSwitcher from "./theme-switcher/ThemeSwitcher";

const ButtonsContainerStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX,
        grid: {
            column: {
                span: 12
            }
        },
        mainAxis: {
            content: Content.END
        },
    })
    .inLaptop({
        grid: {
            column: {
                span: 2
            }
        },
        crossAxis: {
            items: Items.CENTER
        },
        mainAxis: {
            content: Content.CENTER
        },
    })
    .build();

export interface ButtonsContainerProps {
    menu: MenuContainerProps;
}

const ButtonsContainer: React.FC<ButtonsContainerProps> = (props: ButtonsContainerProps) => {
    return (
        <div className={ButtonsContainerStyle}>
            <ThemeSwitcher />
            <MenuContainer {...props.menu} />
        </div>
    );
}

export default ButtonsContainer;