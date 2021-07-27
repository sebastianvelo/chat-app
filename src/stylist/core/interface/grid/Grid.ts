import { SizeNumber } from "stylist/Stylist";
import ColumnPlace from "./values/ColumnPlace";
import ColumnValue from "./values/ColumnValue";
import RowPlace from "./values/RowPlace";
import RowValue from "./values/RowValue";

interface Grid {
    column?: {
        start?: ColumnPlace;
        end?: ColumnPlace;
        span?: ColumnValue;
        template?: ColumnValue;
    };
    row?: {
        start?: RowPlace;
        end?: RowPlace;
        span?: RowValue;
        template?: RowValue;
    };
    order?: ColumnValue,
    gap?: SizeNumber;
}
export default Grid;