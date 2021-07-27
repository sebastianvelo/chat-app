import Stylist, { Display, FlexWrap, Items, Size, TextAlign } from "stylist/Stylist";
import Column, { ColumnProps } from "./Column";

const ColumnsContainerStyle = Stylist.builder()
    .inMobile({
        display: Display.FLEX,
        mainAxis: {
            items: Items.CENTER
        },
        flex: {
            wrap: FlexWrap.WRAP
        },
        maxWidth: Size.SiXL,
        margin: 'auto',
        text: {
            align: TextAlign.CENTER
        }
    })
    .build();

export interface ColumnsContainerProps {
    columns: ColumnProps[];
}

const ColumnsContainer: React.FC<ColumnsContainerProps> = (props: ColumnsContainerProps) => {
    return (
        <div className={ColumnsContainerStyle}>
            {props.columns.map((column, i) => <Column key={i} {...column} />)}
        </div>
    );
}

export default ColumnsContainer;