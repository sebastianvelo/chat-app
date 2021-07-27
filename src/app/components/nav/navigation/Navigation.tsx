import Dropdown from "app/components/common/dropdown/Dropdown";
import Stylist, { Content, Display, Items } from "stylist/Stylist";
import ButtonsContainer, { ButtonsContainerProps } from "../buttons/ButtonsContainer";
import NavLinksContainer, { NavLinksContainerProps } from "../links/NavLinksContainer";
import NavLinksToggler from "../links/NavLinksToggler";

const NavigationContainerStyle = Stylist.builder()
    .inLaptop({
        display: Display.FLEX,
        mainAxis: {
            content: Content.END
        },
        crossAxis: {
            items: Items.CENTER
        }
    })
    .build();

const DropdownContainerStyle = Stylist.builder()
    .inMobile({
        grid: {
            column: {
                span: 12
            }
        },
    })
    .inLaptop({
        grid: {
            column: {
                span: 6
            }
        },
    })
    .build();

export interface NavigationProps extends NavLinksContainerProps, ButtonsContainerProps {}

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
    const content = (
        <div className={NavigationContainerStyle}>
            <NavLinksContainer links={props.links} />
            <ButtonsContainer  menu={props.menu} />
        </div>
    )
    return (
        <div className={DropdownContainerStyle}>
            <Dropdown
                trigger={<NavLinksToggler />}
                content={content}
                style={Stylist.builder().inLaptop({display: Display.BLOCK})}
            />
        </div>
    );
}

export default Navigation;