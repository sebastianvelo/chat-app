import Stylist, { Content, Display, Items } from "stylist/Stylist";
import Header, { HeaderProps } from "./Header";

const HeaderContainerStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX,
        grid: {
            column: {
                span: 12
            }
        },
        mainAxis: {
            content: Content.START
        },
        crossAxis: {
            items: Items.CENTER
        }
    })
    .inLaptop({
        grid: {
            column: {
                span: 6
            }
        },
    })
    .build();

export interface HeaderContainerProps extends HeaderProps { }

const HeaderContainer: React.FC<HeaderContainerProps> = (props: HeaderContainerProps) => {
    return (
        <div className={HeaderContainerStyle}>
            <Header header={props.header} />
        </div>
    );
}

export default HeaderContainer;